namespace :test do
  desc "TODO"
  task execute: :environment do
    p "Start"
    10.times do |i|
      sleep 1
      p "Counter #{i}"
    end
    p "Finish"
  end
end
