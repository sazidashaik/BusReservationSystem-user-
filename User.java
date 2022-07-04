package com.cg.entity;

public class User {
	
	private int userLoginId;
	private String userName;
	private String password;
	private String firstName;
	private String lastName;
	private long contact;
	private String email;
	private reservation Reservation;
	
	public User() {}

	public User(int userLoginId, String userName, String password, String firstName, String lastName, long contact,
			String email, reservation reservation) {
		super();
		this.userLoginId = userLoginId;
		this.userName = userName;
		this.password = password;
		this.firstName = firstName;
		this.lastName = lastName;
		this.contact = contact;
		this.email = email;
		Reservation = reservation;
	}

	public int getUserLoginId() {
		return userLoginId;
	}

	public void setUserLoginId(int userLoginId) {
		this.userLoginId = userLoginId;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public long getContact() {
		return contact;
	}

	public void setContact(long contact) {
		this.contact = contact;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public reservation getReservation() {
		return Reservation;
	}

	public void setReservation(reservation reservation) {
		Reservation = reservation;
	}

	@Override
	public String toString() {
		return "User [userLoginId=" + userLoginId + ", userName=" + userName + ", password=" + password + ", firstName="
				+ firstName + ", lastName=" + lastName + ", contact=" + contact + ", email=" + email + "]";
	}
	
	

}
