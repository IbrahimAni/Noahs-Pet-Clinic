package models;

public class Pet {
    private int petId;
    private int ownerId;
    private String petName;
    private String type;
    private char gender;
    private int age;
    private String color;
    private double weight;

    public Pet(String petName, String type, char gender, int age, String color, double weight) {
        this.petName = petName;
        this.type = type;
        this.gender = gender;
        this.age = age;
        this.color = color;
        this.weight = weight;
    }

    // Getter and Setter methods for each property

    public int getPetId() {
        return petId;
    }

    public int getOwnerId() {
        return ownerId;
    }

    public void setOwnerId(int ownerId) {
        this.ownerId = ownerId;
    }

    public String getPetName() {
        return petName;
    }

    public void setPetName(String petName) {
        this.petName = petName;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public char getGender() {
        return gender;
    }

    public void setGender(char gender) {
        this.gender = gender;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public double getWeight() {
        return weight;
    }

    public void setWeight(double weight) {
        this.weight = weight;
    }
    
    @Override
    public String toString() {
        String petIdDisplay = this.petId == 0 ? "Unassigned" : String.valueOf(this.petId);
        return " | " + petIdDisplay + " | " + this.ownerId + " | " + this.petName + " | " + this.type + " | " + this.gender + " | " + this.age + " | " + this.color + " | " + this.weight + " | ";
    }

}
