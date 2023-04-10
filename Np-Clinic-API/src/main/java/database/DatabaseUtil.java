package database;

import java.sql.Connection;
import java.sql.SQLException;

import javax.sql.DataSource;

import org.apache.tomcat.dbcp.dbcp2.BasicDataSource;



public class DatabaseUtil {
	private static BasicDataSource dataSource;	
	
	static {
		String dbURL = System.getenv("DB_URL");
		String username = System.getenv("DB_USERNAME");
		String password = System.getenv("DB_PASSWORD");
		
		dataSource = new BasicDataSource();
		dataSource.setUrl(dbURL);
		dataSource.setUsername(username);
		dataSource.setPassword(password);
		dataSource.setDriverClassName("com.mysql.jdbc.Driver");
		dataSource.setInitialSize(5);
        dataSource.setMaxTotal(10);
	}
    
    public static Connection getConnection() throws SQLException {
    	return dataSource.getConnection();
    }
    
    public static DataSource getDataSource() {
        return dataSource;
    }
}