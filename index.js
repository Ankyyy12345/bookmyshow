
const express= require("express")
const app= express()
const jwt = require("jsonwebtoken")

app.use(express.json())

const swaggerJSDoc = require("swagger-jsdoc")
const swaggerUi = require("swagger-ui-express")

const options ={
    definition: {
        openapi : '3.0.0',
        info : {
            title: 'Node JS api project for BOOK MY SHOW',
            version: '1.0.0'
        },
        servers:[
            {
                url: 'http://localhost:2500/'
            }
        ]
    },
    apis: ['./index.js']
}

const swaggerSpec = swaggerJSDoc(options)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

// /**
//  * @swagger
//  * /:
//  *  get:
//  *      summary: This api is used to checking purpose
//  *      description: This api is used to checking purpose
//  *      responses: 
//  *          200:
//  *             description: To test Get method
//  */
// app.get('/', (req, res) => {
//     res.send('Welcome to node APIs')
// })




/**
 * @swagger
 * /getadmin:
 *  get:
 *      summary: This api is used to check whether api is working or not in (admin table)
 *      description: This api is used to check whether api is working or not in (admin table)
 *      responses:
 *          200:
 *              description: To test Get method
 */


/**
 * @swagger
 *  components:
 *      schema:
 *         book_my_show:
 *                   type: object
 *                   properties:
 *                        admin_id:
 *                                type: integer
 *                        password:
 *                                type: integer
 *                        email:
 *                                type: varchar                       
 */


/**
 * @swagger
 * /postadmin:
 *  post:
 *      summary: used to insert data into mysql database (admin table)
 *      description: This api is used to insert data into mysql database (admin table)
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schema/book_my_show'
 *      responses:
 *          200:
 *              description: Added successfully
 */


/**
 * @swagger
 * /updateadmin/{admin_id}:
 *  put:
 *      summary: used to update data into mysql database (admin table)
 *      description: This api is used to update data into mysql database (admin table)
 *      parameters:
 *          - in: path
 *            name: admin_id
 *            required: true
 *            description: Numeric id is required
 *            schema:
 *              type: integer
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schema/book_my_show'
 *      responses:
 *          200:
 *              description: updated successfully
 */


/**
 * @swagger
 * /deleteadmin/{admin_id}:
 *  delete:
 *      summary: This api is used to delete the record from (admin table)
 *      description: This api is used to delete the record from (admin table)
 *      parameters:
 *          - in: path
 *            name: admin_id
 *            required: true
 *            description: Numeric id is required
 *            schema:
 *              type: integer
 *      responses:
 *          200:
 *              description: data is deleted successfully
 */


/**
 * @swagger
 * /getowner:
 *  get:
 *      summary: This api is used to check whether api is working or not in (admin table)
 *      description: This api is used to check whether api is working or not in (admin table)
 *      responses:
 *          200:
 *              description: To test Get method
 */


/**
 * @swagger
 *  components:
 *      schema:
 *         book_my_show:
 *                   type: object
 *                   properties:
 *                        owner_id:
 *                                type: integer
 *                        password:
 *                                type: integer
 *                        email:
 *                                type: varchar
 *                        admin_id:
 *                                type: integer                       
 */


/**
 * @swagger
 * /postowner:
 *  post:
 *      summary: used to insert data into mysql database (admin table)
 *      description: This api is used to insert data into mysql database (admin table)
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schema/book_my_show'
 *      responses:
 *          200:
 *              description: Added successfully
 */


/**
 * @swagger
 * /updateowner/{owner_id}:
 *  put:
 *      summary: used to update data into mysql database (admin table)
 *      description: This api is used to update data into mysql database (admin table)
 *      parameters:
 *          - in: path
 *            name: owner_id
 *            required: true
 *            description: Numeric id is required
 *            schema:
 *              type: integer
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schema/book_my_show'
 *      responses:
 *          200:
 *              description: updated successfully
 */


/**
 * @swagger
 * /deleteowner/{owner_id}:
 *  delete:
 *      summary: This api is used to delete the record from (admin table)
 *      description: This api is used to delete the record from (admin table)
 *      parameters:
 *          - in: path
 *            name: owner_id
 *            required: true
 *            description: Numeric id is required
 *            schema:
 *              type: integer
 *      responses:
 *          200:
 *              description: data is deleted successfully
 */



/**
 * @swagger
 * /getadd_movie:
 *  get:
 *      summary: This api is used to check whether api is working or not in (admin table)
 *      description: This api is used to check whether api is working or not in (admin table)
 *      responses:
 *          200:
 *              description: To test Get method
 */


/**
 * @swagger
 *  components:
 *      schema:
 *         book_my_show:
 *                   type: object
 *                   properties:
 *                        movie_id:
 *                                type: integer
 *                        title:
 *                                type: varchar
 *                        description:
 *                                type: varchar
 *                        language:
 *                                type: varchar
 *                        released:
 *                                type: datetime
 *                        country:
 *                                type: varchar
 *                        owner_id
 *                                type: integer                      
 */


/**
 * @swagger
 * /postadd_movie:
 *  post:
 *      summary: used to insert data into mysql database (admin table)
 *      description: This api is used to insert data into mysql database (admin table)
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schema/book_my_show'
 *      responses:
 *          200:
 *              description: Added successfully
 */


/**
 * @swagger
 * /updateadd_movie/{movie_id}:
 *  put:
 *      summary: used to update data into mysql database (admin table)
 *      description: This api is used to update data into mysql database (admin table)
 *      parameters:
 *          - in: path
 *            name: movie_id
 *            required: true
 *            description: Numeric id is required
 *            schema:
 *              type: integer
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schema/book_my_show'
 *      responses:
 *          200:
 *              description: updated successfully
 */


/**
 * @swagger
 * /deleteadd_movie/{movie_id}:
 *  delete:
 *      summary: This api is used to delete the record from (admin table)
 *      description: This api is used to delete the record from (admin table)
 *      parameters:
 *          - in: path
 *            name: movie_id
 *            required: true
 *            description: Numeric id is required
 *            schema:
 *              type: integer
 *      responses:
 *          200:
 *              description: data is deleted successfully
 */




/**
 * @swagger
 * /getbooking_confirmation:
 *  get:
 *      summary: This api is used to check whether api is working or not in (admin table)
 *      description: This api is used to check whether api is working or not in (admin table)
 *      responses:
 *          200:
 *              description: To test Get method
 */


/**
 * @swagger
 *  components:
 *      schema:
 *         book_my_show:
 *                   type: object
 *                   properties:
 *                        booking_id:
 *                                type: integer
 *                        movie_id:
 *                                type: integer
 *                        theater_id:
 *                                type: integer
 *                        status:
 *                                type: varchar
 *                        admin_id:
 *                                type: integer
 *                        owner_id:
 *                                type: integer
 *                        user_id:
 *                                type: integer
 *                        country:
 *                                type: varchar
 *                        booking_confirmation_id
 *                                type: integer                      
 */


/**
 * @swagger
 * /postbooking_confirmation:
 *  post:
 *      summary: used to insert data into mysql database (admin table)
 *      description: This api is used to insert data into mysql database (admin table)
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schema/book_my_show'
 *      responses:
 *          200:
 *              description: Added successfully
 */


/**
 * @swagger
 * /updatebooking_confirmation/{booking_confirmation_id}:
 *  put:
 *      summary: used to update data into mysql database (admin table)
 *      description: This api is used to update data into mysql database (admin table)
 *      parameters:
 *          - in: path
 *            name: booking_confirmation_id
 *            required: true
 *            description: Numeric id is required
 *            schema:
 *              type: integer
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schema/book_my_show'
 *      responses:
 *          200:
 *              description: updated successfully
 */


/**
 * @swagger
 * /deletebooking_confirmation/{booking_confirmation_id}:
 *  delete:
 *      summary: This api is used to delete the record from (admin table)
 *      description: This api is used to delete the record from (admin table)
 *      parameters:
 *          - in: path
 *            name: booking_confirmation_id
 *            required: true
 *            description: Numeric id is required
 *            schema:
 *              type: integer
 *      responses:
 *          200:
 *              description: data is deleted successfully
 */





/**
 * @swagger
 * /getcancel_booking:
 *  get:
 *      summary: This api is used to check whether api is working or not in (admin table)
 *      description: This api is used to check whether api is working or not in (admin table)
 *      responses:
 *          200:
 *              description: To test Get method
 */


/**
 * @swagger
 *  components:
 *      schema:
 *         book_my_show:
 *                   type: object
 *                   properties:
 *                        booking_confirmation_id:
 *                                type: integer
 *                        owner_id:
 *                                type: integer
 *                        user_id:
 *                                type: integer
 *                        status:
 *                                type: varchar
 *                        cancellation_id:
 *                                type: integer
 *                                            
 */


/**
 * @swagger
 * /postcancel_booking:
 *  post:
 *      summary: used to insert data into mysql database (admin table)
 *      description: This api is used to insert data into mysql database (admin table)
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schema/book_my_show'
 *      responses:
 *          200:
 *              description: Added successfully
 */


/**
 * @swagger
 * /updatecancel_booking/{cancellation_id}:
 *  put:
 *      summary: used to update data into mysql database (admin table)
 *      description: This api is used to update data into mysql database (admin table)
 *      parameters:
 *          - in: path
 *            name: cancellation_id
 *            required: true
 *            description: Numeric id is required
 *            schema:
 *              type: integer
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schema/book_my_show'
 *      responses:
 *          200:
 *              description: updated successfully
 */


/**
 * @swagger
 * /deletecancel_booking/{cancellation_id}:
 *  delete:
 *      summary: This api is used to delete the record from (admin table)
 *      description: This api is used to delete the record from (admin table)
 *      parameters:
 *          - in: path
 *            name: cancellation_id
 *            required: true
 *            description: Numeric id is required
 *            schema:
 *              type: integer
 *      responses:
 *          200:
 *              description: data is deleted successfully
 */




/**
 * @swagger
 * /getadd_theater:
 *  get:
 *      summary: This api is used to check whether api is working or not in (admin table)
 *      description: This api is used to check whether api is working or not in (admin table)
 *      responses:
 *          200:
 *              description: To test Get method
 */


/**
 * @swagger
 *  components:
 *      schema:
 *         book_my_show:
 *                   type: object
 *                   properties:
 *                        theater_id:
 *                                type: integer
 *                        theater_name:
 *                                type: varchar
 *                        theater_address:
 *                                type: varchar
 *                        theater_type:
 *                                type: varchar
 *                        theater_size:
 *                                type: varchar
 *                        owner_id:
 *                                type:integer
 *                                            
 */


/**
 * @swagger
 * /postadd_theater:
 *  post:
 *      summary: used to insert data into mysql database (admin table)
 *      description: This api is used to insert data into mysql database (admin table)
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schema/book_my_show'
 *      responses:
 *          200:
 *              description: Added successfully
 */


/**
 * @swagger
 * /updateadd_theater/{theater_id}:
 *  put:
 *      summary: used to update data into mysql database (admin table)
 *      description: This api is used to update data into mysql database (admin table)
 *      parameters:
 *          - in: path
 *            name: theater_id
 *            required: true
 *            description: Numeric id is required
 *            schema:
 *              type: integer
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schema/book_my_show'
 *      responses:
 *          200:
 *              description: updated successfully
 */


/**
 * @swagger
 * /deleteadd_theater/{theater_id}:
 *  delete:
 *      summary: This api is used to delete the record from (admin table)
 *      description: This api is used to delete the record from (admin table)
 *      parameters:
 *          - in: path
 *            name: theater_id
 *            required: true
 *            description: Numeric id is required
 *            schema:
 *              type: integer
 *      responses:
 *          200:
 *              description: data is deleted successfully
 */





/**
 * @swagger
 * /getcancel_booking:
 *  get:
 *      summary: This api is used to check whether api is working or not in (admin table)
 *      description: This api is used to check whether api is working or not in (admin table)
 *      responses:
 *          200:
 *              description: To test Get method
 */


/**
 * @swagger
 *  components:
 *      schema:
 *         book_my_show:
 *                   type: object
 *                   properties:
 *                        booking_confirmation_id:
 *                                type: integer
 *                        owner_id:
 *                                type: integer
 *                        user_id:
 *                                type: integer
 *                        status:
 *                                type: varchar
 *                        cancellation_id:
 *                                type: integer
 *                                            
 */


/**
 * @swagger
 * /postcancel_booking:
 *  post:
 *      summary: used to insert data into mysql database (admin table)
 *      description: This api is used to insert data into mysql database (admin table)
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schema/book_my_show'
 *      responses:
 *          200:
 *              description: Added successfully
 */


/**
 * @swagger
 * /updatecancel_booking/{cancellation_id}:
 *  put:
 *      summary: used to update data into mysql database (admin table)
 *      description: This api is used to update data into mysql database (admin table)
 *      parameters:
 *          - in: path
 *            name: cancellation_id
 *            required: true
 *            description: Numeric id is required
 *            schema:
 *              type: integer
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schema/book_my_show'
 *      responses:
 *          200:
 *              description: updated successfully
 */


/**
 * @swagger
 * /deletecancel_booking/{cancellation_id}:
 *  delete:
 *      summary: This api is used to delete the record from (admin table)
 *      description: This api is used to delete the record from (admin table)
 *      parameters:
 *          - in: path
 *            name: cancellation_id
 *            required: true
 *            description: Numeric id is required
 *            schema:
 *              type: integer
 *      responses:
 *          200:
 *              description: data is deleted successfully
 */





/**
 * @swagger
 * /getpayment:
 *  get:
 *      summary: This api is used to check whether api is working or not in (admin table)
 *      description: This api is used to check whether api is working or not in (admin table)
 *      responses:
 *          200:
 *              description: To test Get method
 */


/**
 * @swagger
 *  components:
 *      schema:
 *         book_my_show:
 *                   type: object
 *                   properties:
 *                        payment_id:
 *                                type: integer
 *                        booking_confirmation_id:
 *                                type: integer
 *                        price:
 *                                type: varchar
 *                        discount_coupon:
 *                                type: varchar
 *                        payment_method:
 *                                type: varchar
 *                        user_id:
 *                                type: integer
 *                                            
 */


/**
 * @swagger
 * /postpayment:
 *  post:
 *      summary: used to insert data into mysql database (admin table)
 *      description: This api is used to insert data into mysql database (admin table)
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schema/book_my_show'
 *      responses:
 *          200:
 *              description: Added successfully
 */


/**
 * @swagger
 * /updatepayment/{payment_id}:
 *  put:
 *      summary: used to update data into mysql database (admin table)
 *      description: This api is used to update data into mysql database (admin table)
 *      parameters:
 *          - in: path
 *            name: payment_id
 *            required: true
 *            description: Numeric id is required
 *            schema:
 *              type: integer
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schema/book_my_show'
 *      responses:
 *          200:
 *              description: updated successfully
 */


/**
 * @swagger
 * /deletepayment/{payment_id}:
 *  delete:
 *      summary: This api is used to delete the record from (admin table)
 *      description: This api is used to delete the record from (admin table)
 *      parameters:
 *          - in: path
 *            name: payment_id
 *            required: true
 *            description: Numeric id is required
 *            schema:
 *              type: integer
 *      responses:
 *          200:
 *              description: data is deleted successfully
 */


/**
 * @swagger
 * /getscreens:
 *  get:
 *      summary: This api is used to check whether api is working or not in (admin table)
 *      description: This api is used to check whether api is working or not in (admin table)
 *      responses:
 *          200:
 *              description: To test Get method
 */


/**
 * @swagger
 *  components:
 *      schema:
 *         book_my_show:
 *                   type: object
 *                   properties:
 *                        screen_id:
 *                                type: integer
 *                        theater_id:
 *                                type: integer                      
 */


/**
 * @swagger
 * /postscreens:
 *  post:
 *      summary: used to insert data into mysql database (admin table)
 *      description: This api is used to insert data into mysql database (admin table)
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schema/book_my_show'
 *      responses:
 *          200:
 *              description: Added successfully
 */


/**
 * @swagger
 * /updatescreens/{screen_id}:
 *  put:
 *      summary: used to update data into mysql database (admin table)
 *      description: This api is used to update data into mysql database (admin table)
 *      parameters:
 *          - in: path
 *            name: screen_id
 *            required: true
 *            description: Numeric id is required
 *            schema:
 *              type: integer
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schema/book_my_show'
 *      responses:
 *          200:
 *              description: updated successfully
 */


/**
 * @swagger
 * /deletescreens/{screen_id}:
 *  delete:
 *      summary: This api is used to delete the record from (admin table)
 *      description: This api is used to delete the record from (admin table)
 *      parameters:
 *          - in: path
 *            name: screen_id
 *            required: true
 *            description: Numeric id is required
 *            schema:
 *              type: integer
 *      responses:
 *          200:
 *              description: data is deleted successfully
 */





/**
 * @swagger
 * /getseats:
 *  get:
 *      summary: This api is used to check whether api is working or not in (admin table)
 *      description: This api is used to check whether api is working or not in (admin table)
 *      responses:
 *          200:
 *              description: To test Get method
 */


/**
 * @swagger
 *  components:
 *      schema:
 *         book_my_show:
 *                   type: object
 *                   properties:
 *                        seat_id:
 *                                type: integer
 *                        seat_name:
 *                                type: varchar
 *                        seat_price:
 *                                type: varchar
 *                        owner_id:
 *                                 type: integer                    
 */


/**
 * @swagger
 * /postseats:
 *  post:
 *      summary: used to insert data into mysql database (admin table)
 *      description: This api is used to insert data into mysql database (admin table)
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schema/book_my_show'
 *      responses:
 *          200:
 *              description: Added successfully
 */


/**
 * @swagger
 * /updateseats/{seat_id}:
 *  put:
 *      summary: used to update data into mysql database (admin table)
 *      description: This api is used to update data into mysql database (admin table)
 *      parameters:
 *          - in: path
 *            name: seat_id
 *            required: true
 *            description: Numeric id is required
 *            schema:
 *              type: integer
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schema/book_my_show'
 *      responses:
 *          200:
 *              description: updated successfully
 */


/**
 * @swagger
 * /deleteseats/{seat_id}:
 *  delete:
 *      summary: This api is used to delete the record from (admin table)
 *      description: This api is used to delete the record from (admin table)
 *      parameters:
 *          - in: path
 *            name: seat_id
 *            required: true
 *            description: Numeric id is required
 *            schema:
 *              type: integer
 *      responses:
 *          200:
 *              description: data is deleted successfully
 */





/**
 * @swagger
 * /getshows:
 *  get:
 *      summary: This api is used to check whether api is working or not in (admin table)
 *      description: This api is used to check whether api is working or not in (admin table)
 *      responses:
 *          200:
 *              description: To test Get method
 */


/**
 * @swagger
 *  components:
 *      schema:
 *         book_my_show:
 *                   type: object
 *                   properties:
 *                        show_id:
 *                                type: integer
 *                        date:
 *                                type: datetime
 *                        movie_start_time:
 *                                type: time
 *                        movie_end_time:
 *                                 type: time
 *                        owner_id:
 *                                 type: integer                    
 */


/**
 * @swagger
 * /postshows:
 *  post:
 *      summary: used to insert data into mysql database (admin table)
 *      description: This api is used to insert data into mysql database (admin table)
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schema/book_my_show'
 *      responses:
 *          200:
 *              description: Added successfully
 */


/**
 * @swagger
 * /updateshows/{show_id}:
 *  put:
 *      summary: used to update data into mysql database (admin table)
 *      description: This api is used to update data into mysql database (admin table)
 *      parameters:
 *          - in: path
 *            name: show_id
 *            required: true
 *            description: Numeric id is required
 *            schema:
 *              type: integer
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schema/book_my_show'
 *      responses:
 *          200:
 *              description: updated successfully
 */


/**
 * @swagger
 * /deleteshows/{show_id}:
 *  delete:
 *      summary: This api is used to delete the record from (admin table)
 *      description: This api is used to delete the record from (admin table)
 *      parameters:
 *          - in: path
 *            name: show_id
 *            required: true
 *            description: Numeric id is required
 *            schema:
 *              type: integer
 *      responses:
 *          200:
 *              description: data is deleted successfully
 */



/**
 * @swagger
 * /getuser_booking:
 *  get:
 *      summary: This api is used to check whether api is working or not in (admin table)
 *      description: This api is used to check whether api is working or not in (admin table)
 *      responses:
 *          200:
 *              description: To test Get method
 */


/**
 * @swagger
 *  components:
 *      schema:
 *         book_my_show:
 *                   type: object
 *                   properties:
 *                        booking_id:
 *                                type: integer
 *                        number_of_seats:
 *                                type: integer
 *                        time_stamp:
 *                                type: time
 *                        price:
 *                                 type: varchar
 *                        seat_type:
 *                                 type: varchar 
 *                        address:
 *                                 type: varchar
 *                        user_id:
 *                                 type: integer                  
 */


/**
 * @swagger
 * /postuser_booking:
 *  post:
 *      summary: used to insert data into mysql database (admin table)
 *      description: This api is used to insert data into mysql database (admin table)
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schema/book_my_show'
 *      responses:
 *          200:
 *              description: Added successfully
 */


/**
 * @swagger
 * /updateuser_booking/{booking_id}:
 *  put:
 *      summary: used to update data into mysql database (admin table)
 *      description: This api is used to update data into mysql database (admin table)
 *      parameters:
 *          - in: path
 *            name: booking_id
 *            required: true
 *            description: Numeric id is required
 *            schema:
 *              type: integer
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schema/book_my_show'
 *      responses:
 *          200:
 *              description: updated successfully
 */


/**
 * @swagger
 * /deleteuser_booking/{booking_id}:
 *  delete:
 *      summary: This api is used to delete the record from (admin table)
 *      description: This api is used to delete the record from (admin table)
 *      parameters:
 *          - in: path
 *            name: booking_id
 *            required: true
 *            description: Numeric id is required
 *            schema:
 *              type: integer
 *      responses:
 *          200:
 *              description: data is deleted successfully
 */




/**
 * @swagger
 * /getuser_movie_details:
 *  get:
 *      summary: This api is used to check whether api is working or not in (admin table)
 *      description: This api is used to check whether api is working or not in (admin table)
 *      responses:
 *          200:
 *              description: To test Get method
 */


/**
 * @swagger
 *  components:
 *      schema:
 *         book_my_show:
 *                   type: object
 *                   properties:
 *                        movie_name:
 *                                type: varchar
 *                        movie_timing:
 *                                type: datetime
 *                        movie_type:
 *                                type: varchar
 *                        user_id:
 *                                 type: integer
 *                        movie_id:
 *                                 type: integer 
 *                        user_movie_details_id:
 *                                 type: integer               
 */


/**
 * @swagger
 * /postuser_movie_details:
 *  post:
 *      summary: used to insert data into mysql database (admin table)
 *      description: This api is used to insert data into mysql database (admin table)
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schema/book_my_show'
 *      responses:
 *          200:
 *              description: Added successfully
 */


/**
 * @swagger
 * /updateuser_movie_details/{user_movie_details_id}:
 *  put:
 *      summary: used to update data into mysql database (admin table)
 *      description: This api is used to update data into mysql database (admin table)
 *      parameters:
 *          - in: path
 *            name: user_movie_details_id
 *            required: true
 *            description: Numeric id is required
 *            schema:
 *              type: integer
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schema/book_my_show'
 *      responses:
 *          200:
 *              description: updated successfully
 */


/**
 * @swagger
 * /deleteuser_movie_details/{user_movie_details_id}:
 *  delete:
 *      summary: This api is used to delete the record from (admin table)
 *      description: This api is used to delete the record from (admin table)
 *      parameters:
 *          - in: path
 *            name: user_movie_details_id
 *            required: true
 *            description: Numeric id is required
 *            schema:
 *              type: integer
 *      responses:
 *          200:
 *              description: data is deleted successfully
 */



/**
 * @swagger
 * /getuser:
 *  get:
 *      summary: This api is used to check whether api is working or not in (admin table)
 *      description: This api is used to check whether api is working or not in (admin table)
 *      responses:
 *          200:
 *              description: To test Get method
 */


/**
 * @swagger
 *  components:
 *      schema:
 *         book_my_show:
 *                   type: object
 *                   properties:
 *                        user_id:
 *                                type: integer
 *                        email:
 *                                type: varchar
 *                        name:
 *                                type: varchar
 *                        phone:
 *                                 type: varchar
 *                        password:
 *                                 type: integer
 *                        address:
 *                                 type: varchar
 *                        adhaar_number    
 *                                 type: varchar           
 */


/**
 * @swagger
 * /postuser:
 *  post:
 *      summary: used to insert data into mysql database (admin table)
 *      description: This api is used to insert data into mysql database (admin table)
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schema/book_my_show'
 *      responses:
 *          200:
 *              description: Added successfully
 */


/**
 * @swagger
 * /updateuser/{user_id}:
 *  put:
 *      summary: used to update data into mysql database (admin table)
 *      description: This api is used to update data into mysql database (admin table)
 *      parameters:
 *          - in: path
 *            name: user_id
 *            required: true
 *            description: Numeric id is required
 *            schema:
 *              type: integer
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schema/book_my_show'
 *      responses:
 *          200:
 *              description: updated successfully
 */


/**
 * @swagger
 * /deleteuser/{user_id}:
 *  delete:
 *      summary: This api is used to delete the record from (admin table)
 *      description: This api is used to delete the record from (admin table)
 *      parameters:
 *          - in: path
 *            name: user_id
 *            required: true
 *            description: Numeric id is required
 *            schema:
 *              type: integer
 *      responses:
 *          200:
 *              description: data is deleted successfully
 */



 
/**
 * @swagger
 * /getuser_movie_selection:
 *  get:
 *      summary: This api is used to check whether api is working or not in (admin table)
 *      description: This api is used to check whether api is working or not in (admin table)
 *      responses:
 *          200:
 *              description: To test Get method
 */


/**
 * @swagger
 *  components:
 *      schema:
 *         book_my_show:
 *                   type: object
 *                   properties:
 *                        movie_name:
 *                                type: varchar
 *                        movie_description:
 *                                type: varchar
 *                        movie_id:
 *                                type: integer
 *                        language:
 *                                 type: varchar
 *                        gener:
 *                                 type: varchar
 *                        user_id:
 *                                 type: integer               
 */


/**
 * @swagger
 * /postuser_movie_selection:
 *  post:
 *      summary: used to insert data into mysql database (admin table)
 *      description: This api is used to insert data into mysql database (admin table)
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schema/book_my_show'
 *      responses:
 *          200:
 *              description: Added successfully
 */


/**
 * @swagger
 * /updateuser_movie_selection/{movie_name}:
 *  put:
 *      summary: used to update data into mysql database (admin table)
 *      description: This api is used to update data into mysql database (admin table)
 *      parameters:
 *          - in: path
 *            name: movie_name
 *            required: true
 *            description: Numeric id is required
 *            schema:
 *              type: integer
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schema/book_my_show'
 *      responses:
 *          200:
 *              description: updated successfully
 */


/**
 * @swagger
 * /deleteuser_movie_selection/{movie_name}:
 *  delete:
 *      summary: This api is used to delete the record from (admin table)
 *      description: This api is used to delete the record from (admin table)
 *      parameters:
 *          - in: path
 *            name: movie_name
 *            required: true
 *            description: Numeric id is required
 *            schema:
 *              type: integer
 *      responses:
 *          200:
 *              description: data is deleted successfully
 */


/**
 * @swagger
 * /getparty:
 *  get:
 *      summary: This api is used to check whether api is working or not in (admin table)
 *      description: This api is used to check whether api is working or not in (admin table)
 *      responses:
 *          200:
 *              description: To test Get method
 */


/**
 * @swagger
 *  components:
 *      schema:
 *         book_my_show:
 *                   type: object
 *                   properties:
 *                        party_id:
 *                                type: integer
 *                        name:
 *                                type: varchar
 *                        work_experience:
 *                                type: varchar
 *                       duration:
 *                                 type: varchar            
 */


/**
 * @swagger
 * /postparty:
 *  post:
 *      summary: used to insert data into mysql database (party_registration table)
 *      description: This api is used to insert data into mysql database (party_registration table)
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schema/book_my_show'
 *      responses:
 *          200:
 *              description: Added successfully
 */


/**
 * @swagger
 * /updateparty/{party_id}:
 *  put:
 *      summary: used to update data into mysql database (admin table)
 *      description: This api is used to update data into mysql database (admin table)
 *      parameters:
 *          - in: path
 *            name: party_id
 *            required: true
 *            description: Numeric id is required
 *            schema:
 *              type: integer
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schema/book_my_show'
 *      responses:
 *          200:
 *              description: updated successfully
 */


/**
 * @swagger
 * /deleteparty/{party_id}:
 *  delete:
 *      summary: This api is used to delete the record from (admin table)
 *      description: This api is used to delete the record from (admin table)
 *      parameters:
 *          - in: path
 *            name: party_id
 *            required: true
 *            description: Numeric id is required
 *            schema:
 *              type: integer
 *      responses:
 *          200:
 *              description: data is deleted successfully
 */










const chart = require("./chart")

const cors= require("cors")
app.use(cors())

const bodyparser= require("body-parser")
app.use(bodyparser.json())

const db = require("./model/connection")
const port= 2500



app.get("/",(req,res)=>{
    res.send("hello")
});

app.listen(port,(err) =>{
    if(err){
        console.log(err.sqlMessage)
    }
    else{
        console.log("server connected")
    }
})


/////////////////admin\\\\\\\\\\\\\

const {admin_routes} = require("./routes/admin_table.routes")
app.use("/", admin_routes)


///////////////owner////////////////

const {owner_routes} = require("./routes/owner_table.routes")
app.use("/", owner_routes)

////////////add_theater////////////

const {add_theater_routes} = require("./routes/add_theater_table.routes")
app.use("/", add_theater_routes)

//////////add_movie//////////////////

const {add_movie_routes} = require("./routes/add_movie_table.routes")
app.use("/", add_movie_routes)

/////////booking_confirmation////////

const {booking_confirmation_routes} = require("./routes/booking_confirmation_table.routes")
app.use("/", booking_confirmation_routes)

////////cancel_booking///////////////

const {cancel_booking_routes} = require("./routes/cancel_booking_table.routes")
app.use("/", cancel_booking_routes)

///////////payment///////////////////

const {payment_routes} = require("./routes/payment_table.routes")
app.use("/", payment_routes)

////////////screens///////////////////

const {screen_routes} = require("./routes/screens_table.routes")
app.use("/", screen_routes)

/////////////seats////////////////////

const {seat_routes} = require("./routes/seats_table.routes")
app.use("/", seat_routes)

///////////////shows//////////////////

const {show_routes} = require("./routes/shows_table.routes")
app.use("/", show_routes)

//////////user_booking////////////////

const {user_booking_routes} = require("./routes/user_booking_table.routes")
app.use("/", user_booking_routes)

//////////user_movie_details/////////


const {user_movie_details_routes} = require("./routes/user_movie_details_table.routes")
app.use("/", user_movie_details_routes)

//////////user_movie_selection/////////

const {user_movie_selection_routes} = require("./routes/user_movie_selection_table.routes")
app.use("/", user_movie_selection_routes)

///////////////////user////////////////

const {user_routes} = require("./routes/user_table.routes")
app.use("/", user_routes)

///////////////////////////////////////

const {registration_routes} = require("./routes/registration.routes")
app.use("/", registration_routes)


const {login_routes} = require("./routes/login_table.routes")
app.use("/", login_routes)



const {party_routes} = require("./routes/party_registration_table.rotes")
app.use("/", party_routes)