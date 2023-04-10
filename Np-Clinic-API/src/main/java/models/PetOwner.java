package models;

public class PetOwner extends Contact {
    private int ownerId;
    private String name;
    private String address;

    public PetOwner(String name, String address, String telephoneNumber, String email, String username, String password) {
        super(telephoneNumber, email, username, password);
        this.name = name;
        this.address = address;
    }

    // Getter and Setter
    public int getOwnerId() {
        return ownerId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    @Override
    public String toString() {
        String ownerIdDisplay = this.ownerId == 0 ? "Unassigned" : String.valueOf(this.ownerId);
        return " | " + ownerIdDisplay + " | " + this.name + " | " + this.address + super.toString();
    }

}
