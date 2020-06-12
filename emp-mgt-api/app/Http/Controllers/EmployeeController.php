<?php
/**
 * Written by: Ogunyemi Oludayo David
 * E-mail: infinitetech7@gmail.com
 * Phone: 08069685283, 08074288823
 * Date: 7/23/2019
 */

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Repositories\DashboardRepository;
use Carbon\Carbon;
use App\Employee;
use Illuminate\Support\Facades\Storage;

class EmployeeController extends Controller
{
   protected $setting;

    public function __construct()
    {

        /* header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Headers: access");
        header("Access-Control-Allow-Methods: GET,POST, OPTION");
        header("Content-Type: application/json; charset=UTF-8");
        header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"); */

    }


    public function listEmployees(){
        $preEmployees = Employee::all();

        if($preEmployees){
            $employees = [];
            foreach($preEmployees AS $employee){
                $employee->avatar = file_exists(storage_path('app/avatars/'.$employee->id.'.png')) ? 
                                    url(Storage::url('app/avatars/'.$employee->id.'.png')) : 
                                    url(Storage::url('app/avatars/default.png'));
                $employees[] = $employee;
            }
            $json = ['key'=>1, 'txt'=>$employees];
        }else{
            $json = ['key'=>0, 'txt'=>'Unable to get the employees list'];
        }
        return response()->json($json);
    }
    public function getEmployee($id){
        $employee = Employee::findOrFail($id);
        if($employee){
            $employee->avatar = file_exists(storage_path('app/avatars/'.$employee->id.'.png')) ? 
                            url(Storage::url('app/avatars/'.$employee->id.'.png')) : 
                            url(Storage::url('app/avatars/default.png'));
            $json = ['key'=>1, 'txt'=>$employee];
        }else{
            $json = ['key'=>0, 'txt'=>'Unable to get the employee with specified ID'];
        }
        return response()->json($json);
    }

    public function addEmployee(Request $request){
        if(empty($request->first_name)){
            $json = ['key'=>0,'txt'=>'First Name cannot be empty'];
        }else if(empty($request->last_name)){
            $json = ['key'=>0,'txt'=>'Last Name cannot be empty'];
        }else if(empty($request->position)){
            $json = ['key'=>0,'txt'=>"Enter employee's position"];
        }else if(empty($request->salary)){
            $json = ['key'=>0,'txt'=>"Enter employee's salary"];
        }else if(empty($request->contract)){
            $json = ['key'=>0,'txt'=>"Select employee's contract type"];
        }else if($request->contract == 'Probation' && empty($request->probation)){
            $json = ['key'=>0,'txt'=>"Select employee's prbation period"];
        }else{
            $data = [
                'first_name'=>$request->first_name,
                'last_name'=>$request->last_name,
                'position'=>$request->position,
                'contract'=>$request->contract,
                'salary'=>$request->salary,
                'probation'=>$request->probation ?: 'Not On Probation',
            ];
            $employee = Employee::create($data);

            if($employee){
                if($request->hasFile('avatar')){
                    $filePath = $request->avatar->storeAs('avatars', $employee->id.'.png'); 
                }
                $json = ['key'=>1,'txt'=>"Employee details added successfully"];
            }else{
                $json = ['key'=>0,'txt'=>"Unable to add employee's details"];
            }
        }
        return response()->json($json);
    }

    

    public function updateEmployee(Request $request, $id){
        if(empty($request->first_name)){
            $json = ['key'=>0,'txt'=>'First Name cannot be empty'];
        }else if(empty($request->last_name)){
            $json = ['key'=>0,'txt'=>'Last Name cannot be empty'];
        }else if(empty($request->position)){
            $json = ['key'=>0,'txt'=>"Enter employee's position"];
        }else if(empty($request->salary)){
            $json = ['key'=>0,'txt'=>"Enter employee's salary"];
        }else if(empty($request->contract)){
            $json = ['key'=>0,'txt'=>"Select employee's contract type"];
        }else if($request->contract == 'Probation' && empty($request->probation)){
            $json = ['key'=>0,'txt'=>"Select employee's prbation period"];
        }else{            
            $employee = Employee::findOrFail($id);
            $data = [
                'first_name'=>$request->first_name,
                'last_name'=>$request->last_name,
                'position'=>$request->position,
                'contract'=>$request->contract,
                'salary'=>$request->salary,
                'probation'=>$request->probation ?: 'Not On Probation',
            ];            
            if($employee->update($data)){
                if($request->hasFile('avatar')){
                    $filePath = $request->avatar->storeAs('avatars', $employee->id.'.png'); 
                }
                $json = ['key'=>1,'txt'=>"Employee details updated successfully"];
            }else{
                $json = ['key'=>0,'txt'=>"Unable to update employee's details"];
            }
        }
        return response()->json($json);
    }

    public function deleteEmployee($id){
        $employee = Employee::findOrFail($id);
        if($employee->delete()){
            $json = ['key'=>1,'txt'=>"Employee's details deleted"];
        }else{
            $json = ['key'=>0,'txt'=>"Unable to delete employee"];
        }
        return response()->json($json);
    }

}
