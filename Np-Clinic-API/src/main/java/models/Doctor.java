package models;

public class Doctor extends Contact {
    private int doctorId;
    private String name;
    private int officeNumber;
    private char isFullTime;

    public Doctor(String name, int officeNumber, String telephoneNumber, String emailAddress, char isFullTime, String username, String password) {
        super(telephoneNumber, emailAddress, username, password);
        this.name = name;
        this.officeNumber = officeNumber;
        this.isFullTime = isFullTime;
    }

    public int getDoctorId() {
        return doctorId;
    }
    
    public void setDoctorId(int doctorId) {
		this.doctorId = doctorId;
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

    public char getIsFullTime() {
        return isFullTime;
    }

    public void setIsFullTime(char isFullTime) {
        this.isFullTime = isFullTime;
    }

    @Override
    public String toString() {
        String doctorIdDisplay = this.doctorId == 0 ? "Unassigned" : String.valueOf(this.doctorId);
        return " | " + doctorIdDisplay + " | " + this.name + " | " + this.officeNumber + " | " + this.isFullTime + super.toString();
    }
}
