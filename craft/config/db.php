<?php

/**
 * Database Configuration
 *
 * All of your system's database configuration settings go in here.
 * You can see a list of the default settings in craft/app/etc/config/defaults/db.php
 */

return array(

	'*' => array(        
        // Use the same prefix in all environments
        'tablePrefix' => 'craft',
    ),

	// Dev database info
	'.dev' => array(
        'server' => 'localhost',
		'user' => 'root',
		'password' => 'root',
		'database' => 'ryanbelisle-craft',
    ),

    // Live database info
	'.com' => array(
        'server' => 'localhost',
		'user' => 'ryanbeli_dbadmin',
		'password' => '@436StaffordSt',
		'database' => 'ryanbeli_ryanbelisle',
    ),  

);
