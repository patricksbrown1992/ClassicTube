# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'
Video.destroy_all

baby = Video.create({title: "Bring Up Baby", user_id: 1, comments: [], year: 1938, runtime: "1m 38s", description: "The film tells the story of a paleontologist in a number of predicaments involving a scatterbrained heiress and a leopard named Baby"} )
baby.movie.attach(io: open('app/assets/images/baby.mp4'), filename: 'baby.mp4')
baby.thumbnail.attach(io: open('app/assets/images/baby.jpg'), filename: 'baby.jpg')

kong = Video.create({title: "King Kong", year: 1933, user_id: 1, comments: [], runtime: "1m 31s", description: "The film portrays the story of a huge, gorilla-like creature dubbed Kong who perishes in an attempt to possess a beautiful young woman (Wray)"} )
kong.movie.attach(io: open('app/assets/images/kong.mp4'), filename: 'kong.mp4')
kong.thumbnail.attach(io: open('app/assets/images/kong.jpeg'), filename: 'kong.jpeg')

one_night = Video.create({title: "It Happened One Night", user_id: 1, comments: [], year: 1934, runtime: "1m 24s", description: "A pampered socialite (Claudette Colbert) tries to get out from under her father's thumb and falls in love with a roguish reporter (Clark Gable)"} )
one_night.movie.attach(io: open('app/assets/images/one_night.mp4'), filename: 'one_night.mp4')
one_night.thumbnail.attach(io: open('app/assets/images/one_night.jpg'), filename: 'one_night.jpg')

oz = Video.create({title: "The Wizard of Oz", year: 1939, user_id: 1, comments: [], runtime: "2m 29s", description: "When a tornado rips through Kansas, Dorothy (Judy Garland) and her dog, Toto, are whisked away in their house to the magical land of Oz"} )
oz.movie.attach(io: open('app/assets/images/oz.mp4'), filename: 'oz.mp4')
oz.thumbnail.attach(io: open('app/assets/images/oz.jpg'), filename: 'oz.jpg')

washington = Video.create({title: "Mr. Smith Goes to Washington", comments: [], user_id: 1, year: 1939, runtime: "1m 56s", description: "The film is about a newly appointed United States Senator who fights against a corrupt political system"} )
washington.movie.attach(io: open('app/assets/images/washington.mp4'), filename: 'washington.mp4')
washington.thumbnail.attach(io: open('app/assets/images/washington.jpg'), filename: 'washington.jpg')

casablanca = Video.create({title: "Casablanca", year: 1942, comments: [], user_id: 1, runtime: "2m 09s", description: "Filmed and set during World War II, it focuses on an American expatriate (Bogart) who must choose between his love for a woman (Bergman) and helping her and her husband (Henreid), a Czech resistance leader, escape from the Vichy-controlled city of Casablanca to continue his fight against the Germans."} )
casablanca.movie.attach(io: open('app/assets/images/casablanca.mp4'), filename: 'casablanca.mp4')
casablanca.thumbnail.attach(io: open('app/assets/images/casablanca.jpg'), filename: 'casablanca.jpg')

friday = Video.create({title: "His Girl Friday", year: 1940, comments: [], user_id: 1, runtime: "1m 40s", description: "The plot centers on a newspaper editor named Walter Burns who is about to lose his ace reporter and ex-wife Hildy Johnson, newly engaged to another man. Burns suggests they cover one more story together, getting themselves entangled in the case of murderer Earl Williams as Burns desperately tries to win back his wife"} )
friday.movie.attach(io: open('app/assets/images/friday.mp4'), filename: 'friday.mp4')
friday.thumbnail.attach(io: open('app/assets/images/friday.jpg'), filename: 'friday.jpg')

gilda = Video.create({title: "Gilda", year: 1946, user_id: 1, comments: [], runtime: "2m 05s", description: "Johnny Farrell (Glenn Ford), a small-time American gambler newly arrived in Buenos Aires, Argentina, wins a lot of money cheating at craps. He falls for his boss' wife, Gilda"} )
gilda.movie.attach(io: open('app/assets/images/gilda.mp4'), filename: 'gilda.mp4')
gilda.thumbnail.attach(io: open('app/assets/images/gilda.jpg'), filename: 'gilda.jpg')

notorious = Video.create({title: "Notorious", user_id: 1, comments: [], year: 1946, runtime: "2m 32s", description: "Spy film noir directed and produced by Alfred Hitchcock, starring Cary Grant, Ingrid Bergman, and Claude Rains as three people whose lives become intimately entangled during an espionage operation"} )
notorious.movie.attach(io: open('app/assets/images/notorious.mp4'), filename: 'notorious.mp4')
notorious.thumbnail.attach(io: open('app/assets/images/notorious.jpg'), filename: 'notorious.jpg')

sleepFilm = Video.create({title: "The Big Sleep", user_id: 1, comments: [], year: 1946, runtime: "1m 50s", description: 'The film stars Humphrey Bogart as private detective Philip Marlowe and Lauren Bacall as Vivian Rutledge in a story about the "process of a criminal investigation, not its results"'} )
sleepFilm.movie.attach(io: open('app/assets/images/sleep.mp4'), filename: 'sleep.mp4')
sleepFilm.thumbnail.attach(io: open('app/assets/images/sleep.png'), filename: 'sleep.png')

roman = Video.create({title: "Roman Holiday", year: 1953, comments: [], user_id: 1, runtime: "2m 16s", description: "It stars Audrey Hepburn as a princess out to see Rome on her own and Gregory Peck as a reporter."} )
roman.movie.attach(io: open('app/assets/images/roman.mp4'), filename: 'roman.mp4')
roman.thumbnail.attach(io: open('app/assets/images/roman.jpg'), filename: 'roman.jpg')


singin = Video.create({title: "Singin' in the Rain", user_id: 1, comments: [], year: 1952, runtime: "1m 46s", description: 'It offers a lighthearted depiction of Hollywood in the late 1920s, with the three stars portraying performers caught up in the transition from silent films to "talkies"'} )
singin.movie.attach(io: open('app/assets/images/singin.mp4'), filename: 'singin.mp4')
singin.thumbnail.attach(io: open('app/assets/images/singin.jpg'), filename: 'singin.jpg')

thief = Video.create({title: "To Catch a Thief", user_id: 1, comments: [], year: 1955, runtime: "2m 16s", description: "The film stars Cary Grant as a retired cat burglar who has to save his reformed reputation by catching an imposter preying on the wealthy tourists of the French Riviera. Grace Kelly stars opposite him as his romantic interest in her final film with Hitchcock."} )
thief.movie.attach(io: open('app/assets/images/thief.mp4'), filename: 'thief.mp4')
thief.thumbnail.attach(io: open('app/assets/images/thief.jpg'), filename: 'thief.jpg')

hot = Video.create({title: "Some Like It Hot", user_id: 1, comments: [], year: 1959, runtime: "2m 20s", description: "The film is about two musicians who dress in drag in order to escape from mafia gangsters whom they witnessed committing a crime (inspired by the Saint Valentine's Day Massacre)."} )
hot.movie.attach(io: open('app/assets/images/hot.mp4'), filename: 'hot.mp4')
hot.thumbnail.attach(io: open('app/assets/images/hot.png'), filename: 'hot.png')

