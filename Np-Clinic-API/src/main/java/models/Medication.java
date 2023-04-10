package models;

public class Medication {
    private int medicationId;
    private int appointmentId;
    private String name;
    private String dosage;
    private String frequency;

    public Medication(int appointmentId, String name, String dosage, String frequency) {
        this.appointmentId = appointmentId;
        this.name = name;
        this.dosage = dosage;
        this.frequency = frequency;
    }

    public int getMedicationId() {
        return medicationId;
    }

    public int getAppointmentId() {
        return appointmentId;
    }

    public void setAppointmentId(int appointmentId) {
        this.appointmentId = appointmentId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDosage() {
        return dosage;
    }

    public void setDosage(String dosage) {
        this.dosage = dosage;
    }

    public String getFrequency() {
        return frequency;
    }

    public void setFrequency(String frequency) {
        this.frequency = frequency;
    }

    @Override
    public String toString() {
        String medicationIdDisplay = this.medicationId == 0 ? "Unassigned" : String.valueOf(this.medicationId);
        return " | " + medicationIdDisplay + " | " + this.appointmentId + " | " + this.name + " | " + this.dosage + " | " + this.frequency + " | ";
    }
}
