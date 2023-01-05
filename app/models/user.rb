class User < ApplicationRecord
  has_secure_password
    validates :username, :email, :session_token, presence: true, uniqueness: true
    validates :username, length: {  in: 3..30 }
    validates :email, length: { in: 3..255 }
    validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
    validates :username, format: { without: URI::MailTo::EMAIL_REGEXP, message: "can't be an email"}
    validates :password, length: { in: 6..255 }, allow_nil: true
    attr_reader :password
    before_validation :ensure_session_token

    has_many :reviews

    def self.find_by_credentials(credential, password)
        if URI::MailTo::EMAIL_REGEXP.match(credential)
          user = User.find_by(email: credential)
        else
          user = User.find_by(username: credential)
        end 

        if user && user.authenticate(password)
          user
        else
          nil
        end
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def authenticate(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token!
        self.session_token = generate_unique_session_token
        self.save!
        self.session_token
    end

    def generate_unique_session_token
        token = SecureRandom::urlsafe_base64
        while User.exists?(session_token: token)
          token = SecureRandom::urlsafe_base64
        end
        token
    end

    def ensure_session_token
      self.session_token ||= generate_unique_session_token
    end
end

