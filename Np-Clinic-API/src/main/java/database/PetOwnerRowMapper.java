package database;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import models.PetOwner;

public class PetOwnerRowMapper implements RowMapper<PetOwner> {
	
	@Override
    public PetOwner mapRow(ResultSet rs, int rowNum) throws SQLException {
        int ownerId = rs.getInt("owner_id");
        String name = rs.getString("name");
        String address = rs.getString("address");
        String telephoneNumber = rs.getString("telephone_number");
        String emailAddress = rs.getString("email_address");
        String username = rs.getString("username");
        String password = rs.getString("password");

        PetOwner petOwner = new PetOwner(name, address, telephoneNumber, emailAddress, username, password);
        petOwner.setOwnerId(ownerId);
        return petOwner;
    }
}
