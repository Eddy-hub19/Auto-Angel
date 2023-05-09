<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress' );

/** Database username */
define( 'DB_USER', 'eduard' );

/** Database password */
define( 'DB_PASSWORD', 'edd2001' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '(>l+H1[p`:!b`>Cu5MfuUAT_*:XxX,E_u@SbnA^Wk1 e{!;{w(5/g]OLLMVKl1LB' );
define( 'SECURE_AUTH_KEY',  'iX?x[J}IWtKE9bi,L,qh9K[:nvA=.BQXdChLb-yA#],bl-GMWFj?GciW(d7Oij_(' );
define( 'LOGGED_IN_KEY',    '[?fIsN5q];bo]Vk0cVyNJ_)tDet{@KK6y78[/j=fWo@zM]DSAA^qVCBz!Z|Vf5R ' );
define( 'NONCE_KEY',        ')Y;*xLB=(k@BU/9`7}F L5^l92Ke~t`YP#(tA|/CfA/X,|q3O#0XxfRH?OJyMVR,' );
define( 'AUTH_SALT',        'E9*)%?q|DP-Ge1,>bX#@66/U%s8!D;pSl{IJ=l@oq$CD_*G~<|X~M3: j}0q|3j@' );
define( 'SECURE_AUTH_SALT', '9Y4`#5.Ro!`H_&`*#^pkrDO) n}n$Ont}4[FYU6|Ua!Y1^a:X/`bZT^#_dBV.7).' );
define( 'LOGGED_IN_SALT',   '>?4va9yo|sg3h;KkS<F`v{z87*{Cyo)}_iieS>0M@icegJp[XuS6FOsWj(@OGo*M' );
define( 'NONCE_SALT',       'AqFWpgqQ_^RxM(KM&g6<E-V8MJ+%[/`)EW@K0*1;~4#?R5>TD9.,S2^_^x{G?V|3' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
