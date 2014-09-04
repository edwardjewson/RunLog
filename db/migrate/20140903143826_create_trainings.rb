class CreateTrainings < ActiveRecord::Migration
  def change
    create_table :trainings do |t|
      t.datetime :date
      t.integer :distance
      t.float :time
      t.text :comment

      t.timestamps
    end
  end
end
