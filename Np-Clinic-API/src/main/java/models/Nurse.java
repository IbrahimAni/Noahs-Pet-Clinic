package models;

public class Nurse extends Contact {
    private int nurseId;
    private String name;
    private int officeNumber;

    // Constructor
    public Nurse(String name, int officeNumber, String telephoneNumber, String emailAddress, String username, String password) {
        super(telephoneNumber, emailAddress, username, password);
        this.name = name;
        this.officeNumber = officeNumber;
    }

    // Getters and Setters
    public int getNurseId() {
        return nurseId;
    }
    
    public void setNurseId(int nurseId) {
		this.nurseId = nurseId;
	}

	public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getOfficeNumber() {
        return officeNumber;
    }

    public void setOfficeNumber(int officeNumber) {
        this.officeNumber = officeNumber;
    }

    // toString method
    @Override
    public String toString() {
        String nurseIdDisplay = this.nurseId == 0 ? "Unassigned" : String.valueOf(this.nurseId);
        return " | " + nurseIdDisplay + " | " + this.name + " | " + this.officeNumber + super.toString();
    }
}
