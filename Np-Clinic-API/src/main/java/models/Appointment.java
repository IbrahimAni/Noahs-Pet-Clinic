package models;

import java.time.LocalDate;
import java.time.LocalTime;

public class Appointment {
    private int appointmentId;
    private int petId;
    private int doctorId;
    private LocalDate apptDate;
    private LocalTime apptTime;
    private double cost;

    public Appointment(int petId, int doctorId, LocalDate apptDate, LocalTime apptTime, double cost) {
        this.petId = petId;
        this.doctorId = doctorId;
        this.apptDate = apptDate;
        this.apptTime = apptTime;
        this.cost = cost;
    }

    // Getters and setters

    public int getAppointmentId() {
        return appointmentId;
    }
    
    public void setAppointmentId(int appointmentId) {
		this.appointmentId = appointmentId;
	}

	public int getPetId() {
        return petId;
    }

    public void setPetId(int petId) {
        this.petId = petId;
    }

    public int getDoctorId() {
        return doctorId;
    }

    public void setDoctorId(int doctorId) {
        this.doctorId = doctorId;
    }

    public LocalDate getApptDate() {
        return apptDate;
    }

    public void setApptDate(LocalDate apptDate) {
        this.apptDate = apptDate;
    }

    public LocalTime getApptTime() {
        return apptTime;
    }

    public void setApptTime(LocalTime apptTime) {
        this.apptTime = apptTime;
    }

    public double getCost() {
        return cost;
    }

    public void setCost(double cost) {
        this.cost = cost;
    }

    // toString method
    @Override
    public String toString() {
        String appointmentIdDisplay = this.appointmentId == 0 ? "Unassigned" : String.valueOf(this.appointmentId);
        return " | " + appointmentIdDisplay + " | " + petId + " | " + doctorId + " | " + apptDate + " | " + apptTime + " | " + cost + " | ";
    }
}
