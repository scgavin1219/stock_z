# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
require "open-uri"

# ApplicationRecord.transaction do 
  puts "Destroying tables..."
  # Unnecessary if using `rails db:seed:replant`
  User.destroy_all
  Listing.destroy_all

  puts "Resetting primary keys..."
  # For easy testing, so that after seeding, the first `User` has `id` of 1
  ApplicationRecord.connection.reset_pk_sequence!('users')

  puts "Creating users..."
  # Create one user with an easy to remember username, email, and password:
  User.create!(
    username: 'Demo-lition', 
    email: 'demo@user.io', 
    password: 'password'
  )

  # More users
  10.times do 
    User.create!({
      username: Faker::Internet.unique.username(specifier: 3),
      email: Faker::Internet.unique.email,
      password: 'password'
    }) 
  end

  puts "Done!"
# end

shoe_1 = Listing.create!({
  name: 'Air Jordan 1 Mid', 
  brand: 'Jordan',
  style: 'DQ8426-517', 
  colorway: 'Dark Concord/White/Black/Taxi',
  description: 'Inspired by the original AJ1, this mid-top edition maintains the iconic look you love while choice colors and crisp leather give it a distinct identity.', 
  old_price: 123.33,
  price: 145.59,
  category: "Sneakers"
})

shoe_1.photos.attach([{io: URI.open("https://stockz-dev.s3.us-west-1.amazonaws.com/jordan1-1.png"), filename: "jordan1-1.png"}, {io: URI.open("https://stockz-dev.s3.us-west-1.amazonaws.com/jordan1-3.png"), filename: "jordan1-3.png"}])
# shoe_1.photo.attach({io: URI.open("https://stockz-dev.s3.us-west-1.amazonaws.com/jordan1-1.png"), filename: "jordan1-1.png"})

shoe_2 = Listing.create!({
  name: 'Jordan Series .06', 
  brand: 'Jordan',
  style: 'DN3680-101', 
  colorway: 'Multi/Multi/Multi', 
  description: 'Upgrade your favorite fit with these sophisticated sneaks. They feature soft suede and bold neon accents—a fresh addition to your daily rotation. And of course, theyre built with the durability and premium comfort that Jordan Brand is known for.', 
  old_price: 80, 
  price: 64.97, 
  category: 'Sneakers' 
})

shoe_2.photos.attach(io: URI.open("https://stockz-dev.s3.us-west-1.amazonaws.com/jordan2-1.png"), filename: "jordan2-1.png")
shoe_2.photos.attach(io: URI.open("https://stockz-dev.s3.us-west-1.amazonaws.com/jordan2-4.png"), filename: "jordan2-4.png")

# shoe_3 = Listing.create!({
#   name: 'Jordan 4 Retro SP', 
#   brand: 'Jordan',
#   style: 'DJ5718-242', 
#   colorway: 'Taupe Haze/Blue Fury-Khaki-Roma Green', 
#   description: 'The Air Jordan 4 Union LA Taupe Haze features a Taupe Haze mesh and suede upper with Roma Green heel tabs and translucent lace loops. From there, Union LA woven tabs on the lateral side and a Sail sole complete the design.', 
#   old_price: 225, 
#   price: 355, 
#   category: 'Sneakers' 
# })

# shoe_3.photos.attach(io: URI.open("https://stockz-dev.s3.us-west-1.amazonaws.com/jordan4-1.png"), filename: "jordan4-1.png")
# shoe_3.photos.attach(io: URI.open("https://stockz-dev.s3.us-west-1.amazonaws.com/jordan4-6.png"), filename: "jordan4-6.png")

# shoe_4 = Listing.create!({
#   name: 'Air Jordan 6 Retro', 
#   brand: 'Jordan',
#   style: 'CT8529-012', 
#   colorway: 'Magnet/College Navy', 
#   description: 'MJs sixth signature shoe debuted during the 1990-1991 season as His Airness battled rivals in pursuit of an elusive first championship. Now, its back in a variety of color schemes. Gear up for the 30th anniversary of the Air Jordan 6 with this timeless classic.', 
#   old_price: 180, 
#   price: 190, 
#   category: 'Sneakers' 
# })

# shoe_4.photos.attach(io: URI.open("https://stockz-dev.s3.us-west-1.amazonaws.com/jordan6-3.png"), filename: "jordan6-3.png")
# shoe_4.photos.attach(io: URI.open("https://stockz-dev.s3.us-west-1.amazonaws.com/jordan6-4.png"), filename: "jordan6-4.png")

# shoe_5 = Listing.create!({
#   name: 'NB 574', 
#   brand: 'New Balance',
#   style: 'U574LR2', 
#   colorway: 'Crimson/Grey/Silver Metallic', 
#   description: 'The 2023 Lunar New Year Collection, inspired by the Year of the Rabbit, is a blend of gentle approachability and willful boldness. A range of footwear and apparel is outfitted with the easy to wear versatility of soft, neutral tones, with the incorporation of deep red pieces throughout the collection adding flashes of unexpected spontaneity. The Lunar New Year 574 outfits the all-time classic in a rich pigskin and mesh material construction, and is offered in two colorways An earth toned and grey palette offers an understated, versatile, and classic look, while a deep crimson design makes a bolder color statement.', 
#   old_price: 99.99, 
#   price: 125, 
#   category: 'Sneakers' 
# })

# shoe_5.photos.attach(io: URI.open("https://stockz-dev.s3.us-west-1.amazonaws.com/newbalanceee1-1.png"), filename: "newbalanceee1-1.png")
# shoe_5.photos.attach(io: URI.open("https://stockz-dev.s3.us-west-1.amazonaws.com/newbalance1-2.png"), filename: "newbalance1-2.png")

# shoe_6 = Listing.create!({
#   name: 'NB Numeric Tiago Lemos 808', 
#   brand: 'New Balance',
#   style: 'NM808WBY', 
#   colorway: 'White/Blue', 
#   description: 'The NB Numeric Tiago Lemos 808 is Lemos second pro model, designed for impact protection and durability. This skate shoe features suede overlays to reinforce high-wear areas of the upper, plus lace ghillies to prevent torn laces. Underfoot, a full-length ABZORB midsole absorbs impact to deliver all-day comfort.', 
#   old_price: 120, 
#   price: 109.99, 
#   category: 'Sneakers' 
# })

# shoe_6.photos.attach(io: URI.open("https://stockz-dev.s3.us-west-1.amazonaws.com/newbalance2-1.png"), filename: "newbalance2-1.png")
# shoe_6.photos.attach(io: URI.open("https://stockz-dev.s3.us-west-1.amazonaws.com/newbalance2-2.png"), filename: "newbalance2-2.png")

# shoe_7 = Listing.create!({
#   name: 'PUMA x POKÉMON Rider FV Pikachu Sneakers', 
#   brand: 'Puma',
#   style: '387688_01', 
#   colorway: 'Empire Yellow/Pale Lemon', 
#   description: 'From the Kantoregion to your closet, the first-ever PUMA x POKÉMON collab has arrived. The collection stands out with contemporary streetwear cues, eye-catching colors, and authentic Pokémon details – so you can be the best-dressed Trainer out there.The Rider FV Pikachu arrives like a thunderbolt for PUMA x POKÉMON. The future-retro silhouette is decked out with bold pops of yellow, a Pikachu trinket, and authentic PUMA x POKÉMON cobranding.', 
#   old_price: 100, 
#   price: 78.85, 
#   category: 'Sneakers' 
# })

# shoe_7.photos.attach(io: URI.open("https://stockz-dev.s3.us-west-1.amazonaws.com/puma1-1.png"), filename: "puma1-1.png")
# shoe_7.photos.attach(io: URI.open("https://stockz-dev.s3.us-west-1.amazonaws.com/puma1-2.png"), filename: "puma1-2.png")

# shoe_8 = Listing.create!({
#   name: 'RS-Simul8', 
#   brand: 'Puma',
#   style: '390337_01', 
#   colorway: 'Sand/Deep-Aqua/Sunset-Glow', 
#   description: 'The RS-Simul8 is the latest model to get the SWxP treatment taking cues from the archive and being mainly inspired by the original Puma’s RS-350. It features the iconic RS cushioning technology and an upper that blends archive and futuristic details. The shoe takes inspiration from the fashion utilitarian. A mix of rich nubucks and leathers with original embroidery graphic, lace hardware and finishing with speckle treatments.', 
#   old_price: 110, 
#   price: 143.22, 
#   category: 'Sneakers' 
# })

# shoe_8.photos.attach(io: URI.open("https://stockz-dev.s3.us-west-1.amazonaws.com/puma2-1.png"), filename: "puma2-1.png")
# shoe_8.photos.attach(io: URI.open("https://stockz-dev.s3.us-west-1.amazonaws.com/puma2-2.png"), filename: "puma2-2.png")

# shoe_9 = Listing.create!({
#   name: 'X-Ray Speed', 
#   brand: 'Puma',
#   style: '387063_18', 
#   colorway: 'White/Black/Aqua-Pale/Lemon', 
#   description: 'Get the X factor in these stylish shjoes engineered for maximum performance. Future and retro combine in this agile twist on iconic PUMA X-Ray design. Maximum comfort in the SoftFoam+ sockliner meets angular overlays and debossed details for a streetwear look thats as strong and dynamic as the woman who wears it. Do you feel the need for Speed? We do.', 
#   old_price: 55.99, 
#   price: 80, 
#   category: 'Sneakers' 
# })

# shoe_9.photos.attach(io: URI.open("https://stockz-dev.s3.us-west-1.amazonaws.com/puma3-1.png"), filename: "puma3-1.png")
# shoe_9.photos.attach(io: URI.open("https://stockz-dev.s3.us-west-1.amazonaws.com/puma3-2.png"), filename: "puma3-2.png")

# shoe_10 = Listing.create!({
#   name: 'Space Fight Shadow 6000', 
#   brand: 'Saucony',
#   style: 'S70703-1', 
#   colorway: 'Multi/Multi/Multi', 
#   description: 'The Shadow 6000 Space Fight is truly out of this world. You can almost see the thin red and black atmosphere of Mars, taste the delicious addition of a pastel space snack, and feel the brave orange of an astronauts’ space suits. One step in these and you’ll be ready to take flight.', 
#   old_price: 150, 
#   price: 184, 
#   category: 'Sneakers' 
# })

# shoe_10.photos.attach(io: URI.open("https://stockz-dev.s3.us-west-1.amazonaws.com/saucony1-1.jpeg"), filename: "saucony1-1.jpeg")
# shoe_10.photos.attach(io: URI.open("https://stockz-dev.s3.us-west-1.amazonaws.com/saucony1-4.png"), filename: "saucony1-4.png")

# shoe_11 = Listing.create!({
#   name: 'Shadow 5000 Mars', 
#   brand: 'Saucony',
#   style: 'S70713-3', 
#   colorway: 'Mars/Rust', 
#   description: 'The Shadow 6000 Mercury, Grid Azura 2000 Venus, Shadow 5000 Mars and Endorphin Trail Earth are the shining stars of our Planet pack. The pack features mesh base, pigskin suede overlays, and details on the tongue that call out the distance between their respective planets and the sun, it pushes the boundaries of time and space. Although it’s not meant for this world, you can rock it Earthside, anyway.', 
#   old_price: 140, 
#   price: 111.99, 
#   category: 'Sneakers' 
# })

# shoe_11.photos.attach(io: URI.open("https://stockz-dev.s3.us-west-1.amazonaws.com/saucony1-2.png"), filename: "saucony1-2.png")
# shoe_11.photos.attach(io: URI.open("https://stockz-dev.s3.us-west-1.amazonaws.com/saucony2-4.png"), filename: "saucony2-4.png")

# shoe_12 = Listing.create!({
#   name: 'Authentic SF Shoe', 
#   brand: 'Vans',
#   style: 'N/A', 
#   colorway: 'White/Floral-Mushroom', 
#   description: 'The Authentic VR3 SF combines our original low profile silhouette with the Vans Surf SF build to create an upgraded, comfortable lace-up style. Featuring sturdy canvas uppers with collapsible heels for versatility, the Authentic VR3 SF fuses modern and vintage detailing for a twist on the ultimate heritage style. This classic low top shoe also includes new EcoCush™ footbed for elevated cushioning and new EcoWaffle™ rubber outsole with the Vans classic waffle pattern. In order to reduce the overall footprint of Vans, our team has set ambitious sustainability goals. Big or small, all of our efforts add up to positive change. VR3 is the Vans commitment to sourcing 100% of our top 4 CO2 impact materials (cotton, leather, rubber and polyester) from Regenerative, Responsibly Sourced Renewable, and/or Recycled sources by 2030.', 
#   old_price: 85, 
#   price: 60, 
#   category: 'Sneakers' 
# })

# shoe_12.photos.attach(io: URI.open("https://stockz-dev.s3.us-west-1.amazonaws.com/vans2-3.png"), filename: "vans2-3.png")
# shoe_12.photos.attach(io: URI.open("https://stockz-dev.s3.us-west-1.amazonaws.com/vans3-1.png"), filename: "vans3-1.png")

# watch_1 = Listing.create!({
#   name: 'GAB001G-2A', 
#   brand: 'Casio',
#   style: 'GA-B001', 
#   colorway: 'Turquoise/Blue', 
#   description: 'Introducing the GA-B001 line of G-SHOCK watches — Featuring a new toughness-driven design and Smartphone Link functionality
#                 Bold color schemes take you from stylish urban streets. More than just fashion, these timepieces also deliver full functionality. Sync with your smartphone via Bluetooth® and tap into the dedicated app to access the functions you need.
#                 The GA-B001 line features an innovative construction, with two separate top and bottom bezel components that connect at the 9 and 3 o’clock positions. This ingenuity is complemented by a meticulous attention to detail, with index markings and a uniquely shaped LCD designed as never before on a G-SHOCK.', 
#   old_price: 150, 
#   price: 160, 
#   category: 'Watches'
# })

# watch_1.photos.attach(io: URI.open("https://stockz-dev.s3.us-west-1.amazonaws.com/casio1-2.png"), filename: "casio1-2.png")
# watch_1.photos.attach(io: URI.open("https://stockz-dev.s3.us-west-1.amazonaws.com/casio1-4.png"), filename: "casio1-4.png")

# watch_2 = Listing.create!({
#    name: 'A700WMG-9AVT', 
#   brand: 'Casio',
#   style: 'A700', 
#   colorway: 'Gold', 
#   description: 'This Casio A700WMG-9AVT Digital Vintage Collection Watch Gold by Casio features Casio Vintage with mineral glass and milanese band. LED light and daily alarm. Stainless Steel band. Mineral glass. LED light. Daily alarm. 1/100 stopwatch (60min). Auto calendar. ', 
#   old_price: 85, 
#   price: 60, 
#   category: 'Watches'
# })

# watch_2.photos.attach(io: URI.open("https://stockz-dev.s3.us-west-1.amazonaws.com/casio2-1.png"), filename: "casio2-1.png")
# watch_2.photos.attach(io: URI.open("https://stockz-dev.s3.us-west-1.amazonaws.com/casio2-2.png"), filename: "casio2-2.png")

# watch_3 = Listing.create!({
#    name: 'GA2100-7A', 
#   brand: 'G-Shock',
#   style: 'GA-2100', 
#   colorway: 'White', 
#   description: 'Choose timeless versatility with the iconic octagonal G-SHOCK look, now in tasteful GA-2100 colors.
#                 Made of carbon fiber-reinforced fine resin for a thinner, lighter watchcase that is as tough as ever. The simple design and rugged construction features a black dial for a cool, polished look.', 
#   old_price: 90, 
#   price: 99, 
#   category: 'Watches'
# })

# watch_3.photos.attach(io: URI.open("https://stockz-dev.s3.us-west-1.amazonaws.com/gshock1.png"), filename: "gshock1.png")
# watch_3.photos.attach(io: URI.open("https://stockz-dev.s3.us-west-1.amazonaws.com/gshock1-3.png"), filename: "gshock1-3.png")

# watch_4 = Listing.create!({
#    name: 'GWM5610-1', 
#   brand: 'G-Shock',
#   style: '5600', 
#   colorway: 'Black/Red', 
#   description: 'This new model presents a number of choice in modern, fashionable, wrist wear.
#                 The square bezel is based on the ever-poplar DW-5600 series.
#                 MULTIBAND6 reception of six time calibration signals: Japan (2), United States, Germany, England, China
#                 Tough Solar ensures stable operation even when using power-hungry functions.', 
#   old_price: 150, 
#   price: 150, 
#   category: 'Watches'
# })

# watch_4.photos.attach(io: URI.open("https://stockz-dev.s3.us-west-1.amazonaws.com/gshock2-2.png"), filename: "gshock2-2.png")
# watch_4.photos.attach(io: URI.open("https://stockz-dev.s3.us-west-1.amazonaws.com/gshock2-3.png"), filename: "gshock2-3.png")

# electronic_1 = Listing.create!({
#   name: 'Steam Deck 512GB', 
#   brand: 'Valve',
#   style: 'V004287-30', 
#   colorway: 'Black', 
#   description: 'Valve shocked the gaming world when it announced the Valve Steam Deck in mid-July, launching the company into the handheld gaming market. The Valve Steam Deck 512GB will bring a PC gamers Steam library to the handheld console, which Valve says will provide a seamless transition between both platforms. Like the name suggests, the Steam Deck 512GB will include 512GB NVMe SSD internal storage, and will include a carrying case and an exclusive steam community profile bundle. The Valve Steam Deck 512GB model will also include anti-glare etched glass, and an exclusive virtual keyboard theme. A micro SD slot will also enable expanded storage. The Steam Deck can also be docked to a monitor, and used as a PC, or docked to a TV. Valve partnered with AMD to create a specialized APU optimized for handheld gaming, and Valve says the chip will deliver performance to run AAA gaming titles. The Steam Deck 512GB is outfitted with a 7-inch touchscreen, and two trackpads under the control sticks that allow gamers to operate games never designed outside of mouse and keyboard capabilities.', 
#   old_price: 649, 
#   price: 899, 
#   category: 'Electronics' 
# })

# electronic_1.photos.attach(io: URI.open("https://stockz-dev.s3.us-west-1.amazonaws.com/steamdeck1.png"), filename: "steamdeck1.png")
# electronic_1.photos.attach(io: URI.open("https://stockz-dev.s3.us-west-1.amazonaws.com/steamdeck2.png"), filename: "steamdeck2.png")

# electronic_2 = Listing.create!({
#   name: 'PS5', 
#   brand: 'Sony',
#   style: '3005719', 
#   colorway: 'White/Black', 
#   description: 'The PlayStation 5 (US Plug) Digital Edition Console remains one of the most sought-after gaming console releases as millions of people look to upgrade their previous generation console. With a retail price of $400 ($100 less than the Blu-ray Edition), this PlayStation PS5 (US Plug) Digital Edition Console comes without a disc drive and features a sleek white design with a matching DualSense controller. The PlayStation 5 (US Plug) Digital Edition Console was released on November 12, 2020, but sold out quickly at retailers globally. The PlayStation 5 (US Plug) Digital Edition Console is in stock on StockX, even if it might be sold out in stores.', 
#   old_price: 499, 
#   price: 679, 
#   category: 'Electronics' 
# })

# electronic_2.photos.attach(io: URI.open("https://stockz-dev.s3.us-west-1.amazonaws.com/ps51.png"), filename: "ps51.png")
# electronic_2.photos.attach(io: URI.open("https://stockz-dev.s3.us-west-1.amazonaws.com/ps52.png"), filename: "ps52.png")

# electronic_3 = Listing.create!({
#   name: 'Apple Airpods Pro(2nd Generation)', 
#   brand: 'Apple',
#   style: 'MQD83AM/A', 
#   colorway: 'White', 
#   description: 'The Apple Airpods Pro 2nd Gen 2022 MQD83AM A White is the brand´s 2nd generation Bluetooth earbuds.
#                 This Airpods Pro comes with a MagSafe Charging Case, silicone ear tips, and a USB-C to Lightning cable. It features 2x Active Noise Cancellation, personalized spatial audio, audio quality powered by the H2 Chip, adaptive transparency, seamless switching, dynamic head tracking, audio switching, and touch control. In addition, these Airpods in white offer up to 6 hours of playback when fully charged, with another 30 hours within the charging case.', 
#   old_price: 229, 
#   price: 199, 
#   category: 'Electronics' 
# })

# electronic_3.photos.attach(io: URI.open("https://stockz-dev.s3.us-west-1.amazonaws.com/airpods1.png"), filename: "airpods1.png")
# electronic_3.photos.attach(io: URI.open("https://stockz-dev.s3.us-west-1.amazonaws.com/appl2.png"), filename: "appl2.png")

# electronic_4 = Listing.create!({
#   name: 'Nintendo Switch Console', 
#   brand: 'Nintendo',
#   style: 'HADSKABAA', 
#   colorway: 'Blue/Black/Red', 
#   description: 'Released in 2017, the Nintendo Switch (Neon Red/Neon Blue) has quickly become one of the most successful Nintendo consoles of all time. The Nintendo Switch (Neon Red/Neon Blue) is a hybrid console, meaning games can be played in handheld mode, or connected to a TV like a traditional gaming console. After you purchase the console, check out the selection of Switch gaming titles available on StockX like Metroid Dread, The Legend of Zelda: Breath of the Wild, and Animal Crossing: New Horizons.', 
#   old_price: 299, 
#   price: 274, 
#   category: 'Electronics'
# })

# electronic_4.photos.attach(io: URI.open("https://stockz-dev.s3.us-west-1.amazonaws.com/switch1.png"), filename: "switch1.png")
# electronic_4.photos.attach(io: URI.open("https://stockz-dev.s3.us-west-1.amazonaws.com/switch2.png"), filename: "switch2.png")

# card_1 = Listing.create!({
#   name: 'Alpha Black Lotus', 
#   brand: 'Magic The Gathering',
#   style: 'BGS 8.0', 
#   colorway: 'Black', 
#   description: 'BGS 8.0 Alpha Black Lotus with 9.5 centering.  This card feels very under graded and could likely fetch a better grade if resubmitted.  Corners show very light whitening from dull cutting die, edges are outstanding, centering is perfect.  Slight indentation visible on back of card under bright light.', 
#   old_price: 100000, 
#   price: 175000, 
#   category: 'Trading Cards' 
# })

# card_1.photos.attach(io: URI.open("https://stockz-dev.s3.us-west-1.amazonaws.com/black-lotus1.png"), filename: "black-lotus1.png")
# card_1.photos.attach(io: URI.open("https://stockz-dev.s3.us-west-1.amazonaws.com/black-lotus2.png"), filename: "black-lotus2.png")

# card_2 = Listing.create!({
#   name: 'Lightning Bolt', 
#   brand: 'Magic the Gathering',
#   style: '2ED', 
#   colorway: 'Red', 
#   description: 'Lightning Bolt is one of of the five Alpha boons. It was recognized to be very powerful and influenced the evolution of Magic in significant ways.', 
#   old_price: 45, 
#   price: 22, 
#   category: 'Trading Cards' 
# })

# card_2.photos.attach(io: URI.open("https://stockz-dev.s3.us-west-1.amazonaws.com/lighningbolt1.png"), filename: "lighningbolt1.png")
# card_2.photos.attach(io: URI.open("https://stockz-dev.s3.us-west-1.amazonaws.com/lightningbolt2.png"), filename: "lightningbolt2.png")

# card_3 = Listing.create!({
#   name: 'No. 1 Trainer', 
#   brand: 'Pokemon',
#   style: 'PK1254', 
#   colorway: 'Yellow', 
#   description: 'No.1 Trainer is an Item card. It was first released in Japan as a Trainer card through several tournaments before becoming the first place prize in the Pokémon World Championships.', 
#   old_price: 175000, 
#   price: 150000, 
#   category: 'Trading Cards' 
# })

# card_3.photos.attach(io: URI.open("https://stockz-dev.s3.us-west-1.amazonaws.com/no1trainer.png"), filename: "no1trainer.png")
# card_3.photos.attach(io: URI.open("https://stockz-dev.s3.us-west-1.amazonaws.com/no1trainer2.png"), filename: "no1trainer2.png")

# card_4 = Listing.create!({
#   name: 'Shining Charizard', 
#   brand: 'Pokemon',
#   style: 'PK4982', 
#   colorway: 'Burnt-Orange', 
#   description: 'The Shining Charizard from Neon Destiny is the first Pokémon card to depict a Shiny Charizard, and actually predates "Shiny" as a term for rare Pokémon with unusual coloration. Among collectors, its one of the most prized Pokémon cards ever printed.', 
#   old_price: 1523, 
#   price: 429.99, 
#   category: 'Trading Cards' 
# })

# card_4.photos.attach(io: URI.open("https://stockz-dev.s3.us-west-1.amazonaws.com/shingingchar1.png"), filename: "shiningchar1.png")
# card_4.photos.attach(io: URI.open("https://stockz-dev.s3.us-west-1.amazonaws.com/shiningchar2.png"), filename: "shiningchar2.png")

# card_5 = Listing.create!({
#   name: 'Shining Gyarados', 
#   brand: 'Pokemon',
#   style: 'PK3902', 
#   colorway: 'Blue', 
#   description: 'Shining Gyarados and its unevolved form, Shining Magikarp, are the first Shining Pokémon cards, as well as the first cardboard depictions of Shiny Pokémon. They actually predate "Shiny Pokémon" as a term for Pokémon with a typical color schemes.', 
#   old_price: 423.99, 
#   price: 88.35, 
#   category: 'Trading Cards' 
# })

# card_5.photos.attach(io: URI.open("https://stockz-dev.s3.us-west-1.amazonaws.com/shininggyarados1.png"), filename: "shininggyarados1.png")
# card_5.photos.attach(io: URI.open("https://stockz-dev.s3.us-west-1.amazonaws.com/shininggyarados2.png"), filename: "shininggyarados2.png")