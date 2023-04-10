package models;

public class AppointmentNursed {
    private int id;
    private int appointmentId;
    private Nurse nurse;

    public AppointmentNursed(int appointmentId, Nurse nurse) {
        this.appointmentId = appointmentId;
        this.nurse = nurse;
    }

    public int getId() {
        return id;
    }

    public int getAppointmentId() {
        return appointmentId;
    }

    public void setAppointmentId(int appointmentId) {
        this.appointmentId = appointmentId;
    }

    public Nurse getNurse() {
        return nurse;
    }

    public void setNurse(Nurse nurse) {
        this.nurse = nurse;
    }

    @Override
    public String toString() {
        String idDisplay = this.id == 0 ? "Unassigned" : String.valueOf(this.id);
        return " | " + idDisplay + " | " + this.appointmentId + " | " + this.nurse.getName() + " | ";
    }
}
