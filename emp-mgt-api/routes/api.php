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

Route::get('/list_employees', 'EmployeeController@listEmployees')->middleware('cors');
Route::get('/get_employee/{id}', 'EmployeeController@getEmployee')->middleware('cors');
Route::post('/add_employee', 'EmployeeController@addEmployee')->middleware('cors');
Route::post('/update_employee/{id}', 'EmployeeController@updateEmployee')->middleware('cors');
//Route::put('/update_employee/{id}', 'EmployeeController@updateEmployee')->middleware('cors');
Route::delete('/delete_employee/{id}', 'EmployeeController@deleteEmployee')->middleware('cors');
