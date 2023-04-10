package database;

import java.util.List;

import javax.sql.DataSource;

import org.springframework.jdbc.core.JdbcTemplate;


import models.PetOwner;


public class PetOwnerDAO {
	private static JdbcTemplate jdbcTemplate;	
	
	public PetOwnerDAO() {
		DataSource dataSource = DatabaseUtil.getDataSource();
		jdbcTemplate = new JdbcTemplate(dataSource);
	}
	
	// Retrieve all pet owners from the database
    public List<PetOwner> getAllPetOwners() {
        String sql = "SELECT * FROM pet_owners";
        return PetOwnerDAO.jdbcTemplate.query(sql, new PetOwnerRowMapper());
    }
}
