<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/* Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
}); */

Route::get('/list_employees', 'EmployeeController@listEmployees');
Route::get('/get_employee/{id}', 'EmployeeController@getEmployee');
Route::post('/add_employee', 'EmployeeController@addEmployee');
Route::post('/update_employee/{id}', 'EmployeeController@updateEmployee');
//Route::put('/update_employee/{id}', 'EmployeeController@updateEmployee');
Route::delete('/delete_employee/{id}', 'EmployeeController@deleteEmployee');
