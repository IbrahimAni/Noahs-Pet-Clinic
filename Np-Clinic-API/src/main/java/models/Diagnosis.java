package models;

import java.time.LocalDate;

public class Diagnosis {
    private int diagnosisId;
    private int appointmentId;
    private LocalDate diagnosisDate;
    private String description;
    private char referral;
    private char deferral;

    public Diagnosis(int appointmentId, LocalDate diagnosisDate, String description, char referral, char deferral) {
        this.appointmentId = appointmentId;
        this.diagnosisDate = diagnosisDate;
        this.description = description;
        this.referral = referral;
        this.deferral = deferral;
    }

    public int getDiagnosisId() {
        return diagnosisId;
    }

    public int getAppointmentId() {
        return appointmentId;
    }

    public void setAppointmentId(int appointmentId) {
        this.appointmentId = appointmentId;
    }

    public LocalDate getDiagnosisDate() {
        return diagnosisDate;
    }

    public void setDiagnosisDate(LocalDate diagnosisDate) {
        this.diagnosisDate = diagnosisDate;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public char getReferral() {
        return referral;
    }

    public void setReferral(char referral) {
        this.referral = referral;
    }

    public char getDeferral() {
        return deferral;
    }

    public void setDeferral(char deferral) {
        this.deferral = deferral;
    }

    @Override
    public String toString() {
        String diagnosisIdDisplay = this.diagnosisId == 0 ? "Unassigned" : String.valueOf(this.diagnosisId);
        return " | " + diagnosisIdDisplay + " | " + appointmentId + " |" + diagnosisDate + " | " + description + " | " + referral + " | " + deferral + " | ";
    }
}
