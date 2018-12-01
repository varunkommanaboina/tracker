<?php
	class User_model extends CI_Model{
		public function register($enc_password){
			// User data array
			$data = array(
				'name' => $this->input->post('name'),
				'email' => $this->input->post('email'),
                'username' => $this->input->post('username'),
                'password' => $enc_password,
                'zipcode' => $this->input->post('zipcode')
			);

			// Insert user
			return $this->mongo_db->insert('test', $data);
		} 



		public function login($username, $password){
			// Validate
		

			$data= $this->mongo_db->select(array(),array('zipcode'))
			->where(array('name' => $username,'password'=>$password))
			->get('test');

			if (count($data) > 0){
			return $data[0]['_id'];
			}
			else
			{
				return false;
			}
		}
	}
