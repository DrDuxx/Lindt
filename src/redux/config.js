import axios from 'axios';

const baseURL = `localhost:3091`;
const publicUrl = `localhost:3091`;

let headers = {
	Accept: 'application/json',
	'Content-Type': 'application/json',
};
let headersdata = {
	...headers,
	Authorization: 'Bearer ' + localStorage.access_token,
};

const errorCatch = (error) => {
	console.log('ERROR API', error)
	console.log('ERROR API RESP', error.response)
	if (error.response.data.code === 401) {
		//logout user to be implemented
		//apiService.logout();
	}
	return error.response;
};

/**********************************************************************************************/
/**************************************** AUTH ************************************************/
/**********************************************************************************************/
// REGISTER
async function signUp(data) {
	const url = `${baseURL}/users/register`;
	return await axios
		.post(url, data.data)
		.then((response) => response)
		.catch((error) => {
			return errorCatch(error);
		});
}

async function loginUser(data) {
	const url = `${baseURL}/users/login`;
	return await axios
		.post(url, data)
		.then((response) => response)
		.catch((error) => {
			return errorCatch(error);
		});
}

async function logoutUser(formdata, headers) {
	const url = `${baseURL}/users/logout`;
	return await axios
		.post(url, formdata, { headers: headers })
		.then((response) => response)
		.catch((error) => {
			return errorCatch(error);
		});
}

async function forgotPass(data) {
	const url = `${baseURL}/users/forgotpass`;
	return await axios
		.post(url, data)
		.then((response) => response)
		.catch((error) => {
			return errorCatch(error);
		});
}

async function resetPass(data, headers) {
	const url = `${baseURL}/users/resetpass`;
	return await axios
		.post(url, data, { headers: headers })
		.then((response) => response)
		.catch((error) => {
			return errorCatch(error);
		});
}

async function verify(data) {
	const url = `${baseURL}/users/verify`;
	return await axios
		.post(url, data)
		.then((response) => response)
		.catch((error) => {
			return errorCatch(error);
		});
}

async function updateProfile(data, headers) {
	const url = `${baseURL}/users/update`;
	return await axios
		.post(url, data, { headers: { Authorization: headers } })
		.then((response) => response)
		.catch((error) => {
			return errorCatch(error);
		});
}

/**********************************************************************************************/
/***************************************** SPACE **********************************************/
/**********************************************************************************************/
// GET SPACES
async function getSpaceInCompany(data, headers) {
	const url = `${baseURL}/space/getSpaces?company_id=${data.coid}`;
	return await axios
		.get(url, { headers: { Authorization: headers } })
		.then((response) => response)
		.catch((error) => {
			return errorCatch(error);
		});
}

// GET SPACE DETAILS
async function getSpaceDetails(data, headers) {
	const url = `${baseURL}/space/getSpace?space_id=${data.sid}`;
	return await axios
		.get(url, { headers: { Authorization: headers } })
		.then((response) => response)
		.catch((error) => {
			return errorCatch(error);
		});
}

// ADD SPACE
async function addSpace(data, headers) {
	const url = `${baseURL}/space/add`;
	return await axios
		.post(url, data.data, { headers: { Authorization: headers } })
		.then((response) => response)
		.catch((error) => {
			return errorCatch(error);
		});
}

// EDIT SPACE
async function editSpace(data, headers) {
	const url = `${baseURL}/space/edit`;
	return await axios
		.post(url, data.data, { headers: { Authorization: headers } })
		.then((response) => response)
		.catch((error) => {
			return errorCatch(error);
		});
}

// DELETE SPACE
async function deleteSpace(data, headers) {
	const url = `${baseURL}/space/delete`;
	return await axios
		.post(url, data, { headers: { Authorization: headers } })
		.then((response) => response)
		.catch((error) => {
			return errorCatch(error);
		});
}

/**********************************************************************************************/
/***************************************** PROJECT ********************************************/
/**********************************************************************************************/

//CREATE PROJECT
async function createProject(data, headers) {
	const url = `${baseURL}/project/add`;
	return await axios
		.post(url, data.data, { headers: { Authorization: headers } })
		.then((response) => response)
		.catch((error) => {
			return errorCatch(error);
		});
}

//CREATE PROJECT
async function editProject(data, headers) {
	const url = `${baseURL}/project/edit?project_id=${data.project_id}`;
	return await axios
		.post(url, data, { headers: { Authorization: headers } })
		.then((response) => response)
		.catch((error) => {
			return errorCatch(error);
		});
}

//CREATE PROJECT
async function deleteProject(data, headers) {
	const url = `${baseURL}/project/delete?project_id=${data.project_id}`;
	return await axios
		.post(url, data.data, { headers: { Authorization: headers } })
		.then((response) => response)
		.catch((error) => {
			return errorCatch(error);
		});
}

// GET PROJECT DETAILS
async function getProjectDetails(data, headers) {
	const url = `${baseURL}/project/details?project_id=${data.project_id}`;
	return await axios
		.get(url, { headers: { Authorization: headers } })
		.then((response) => response)
		.catch((error) => {
			return errorCatch(error);
		});
}

// GET PROJECT TASKS
async function getProjectTasks(data, headers) {
	const url = `${baseURL}/task/get-tasks?project_id=${data.id}`;
	return await axios
		.get(url, { headers: { Authorization: headers } })
		.then((response) => response)
		.catch((error) => {
			return errorCatch(error);
		});
}

// ADD TASK
async function addTask(data, headers) {
	const url = `${baseURL}/task/add`;
	return await axios
		.post(url, data.data, { headers: { Authorization: headers } })
		.then((response) => response)
		.catch((error) => {
			return errorCatch(error);
		});
}

// EDIT TASK
async function editTask(data, headers) {
	const url = `${baseURL}/task/edit`;
	return await axios
		.post(url, data.data, { headers: { Authorization: headers } })
		.then((response) => response)
		.catch((error) => {
			return errorCatch(error);
		});
}

// DELETE TASK
async function deleteTask(data, headers) {
	const url = `${baseURL}/task/delete`;
	return await axios
		.post(url, data, { headers: { Authorization: headers } })
		.then((response) => response)
		.catch((error) => {
			return errorCatch(error);
		});
}

// GET TASKS DETAILS
async function getTaskDetails(data, headers) {
	const url = `${baseURL}/task/details?task_id=${data.task_id}`;
	return await axios
		.get(url, { headers: { Authorization: headers } })
		.then((response) => response)
		.catch((error) => {
			return errorCatch(error);
		});
}

/**********************************************************************************************/
/***************************************** COMPANY ********************************************/
/**********************************************************************************************/
//GET COMPANY
async function getCompanyProfile(headers) {
	const url = `${baseURL}/company/profile`;
	return await axios
		.get(url, { headers: { Authorization: headers } })
		.then((response) => response)
		.catch((error) => {
			return errorCatch(error);
		});
}

async function companyIndustries(data) {
	const url = `${baseURL}/company/getIndustries`;
	return await axios
		.get(url, { headers: headersdata })
		.then((response) => response)
		.catch((error) => {
			errorCatch(error);
		});
}

async function onBoarding(data) {
	const url = `${baseURL}/company/onboarding?token=${data.token}`;
	return await axios
		.post(url, data.data, { headers: headersdata })
		.then((response) => response)
		.catch((error) => {
			return errorCatch(error);
		});
}

async function getCompanyDetail(data, headers) {
	const url = `${baseURL}/company/companyDetails?company_id=${data.coid}`;
	return await axios
		.get(url, { headers: { Authorization: headers } })
		.then((response) => response)
		.catch((error) => {
			errorCatch(error);
		});
}

// ADD COMPANY
async function addCompany(data, headers) {
	const url = `${baseURL}/company/add`;
	return await axios
		.post(url, data.data, { headers: { Authorization: headers } })
		.then((response) => response)
		.catch((error) => {
			return errorCatch(error);
		});
}

// EDIT COMPANY
async function editCompany(data, headers) {
	const url = `${baseURL}/company/edit?company_id=${data.coid}`;
	return await axios
		.post(url, data.data, { headers: { Authorization: headers } })
		.then((response) => response)
		.catch((error) => {
			return errorCatch(error);
		});
}

// DELETE COMPANY
async function deleteCompany(data, headers) {
	const url = `${baseURL}/company/delete?company_id=${data.coid}`;
	return await axios
		.post(url, data, { headers: { Authorization: headers } })
		.then((response) => response)
		.catch((error) => {
			return errorCatch(error);
		});
}

// GET COMPANY EMPLOYEES
async function getCompanyEmployees(data, headers) {
	const url = `${baseURL}/company/getCompanyEmployees?company_id=${data.coid}`;
	return await axios
		.get(url, { headers: { Authorization: headers } })
		.then(response => response)
		.catch((error) => {
			return errorCatch(error);
		});
}

// ADD USER
async function addUser(data, headers) {
	const url = `${baseURL}/company/addEmployee`;
	return await axios
		.post(url, data.data, { headers: { Authorization: headers } })
		.then((response) => response)
		.catch((error) => {
			return errorCatch(error);
		});
}


/**********************************************************************************************/
/*****************************************  EDITOR  *******************************************/
/**********************************************************************************************/
// GET PLANS
// async function getPlans(data,headers){
// 	const url = `${baseURL}/plan/get?project_id=${data}`;
// 	return await axios
// 		.get(url,{headers:{Authorization: headers}})
// 		.then(response=>response)
// 		.catch((error)=>{
// 			return errorCatch(error)
// 		});
// }

// GET EDITOR COMMENTS
async function getPlanComments(data, headers) {
	const url = `${baseURL}/plan/editor-comments?planId=${data}`;
	return await axios
		.get(url, { headers: { Authorization: headers } })
		.then((response) => response)
		.catch((error) => {
			return errorCatch(error);
		});
}

// ADD EDITOR COMMENTS
async function addPlanComments(data, headers) {
	const url = `${baseURL}/plan/editor-comments/add`;
	return await axios
		.post(url, data, { headers: { Authorization: headers } })
		.then((response) => response)
		.catch((error) => {
			return errorCatch(error);
		});
}

// EDIT EDITOR COMMENTS
async function editPlanComments(data, headers) {
	const url = `${baseURL}/plan/editor-comments/edit`;
	console.log(data)
	return await axios
		.post(url, data, { headers: { Authorization: headers } })
		.then((response) => response)
		.catch((error) => {
			return errorCatch(error);
		});
}

// DELETE EDITOR COMMENTS
async function deletePlanComments(data, headers) {
	const url = `${baseURL}/plan/editor-comments/delete`;
	return await axios
		.post(url, data, { headers: { Authorization: headers } })
		.then((response) => response)
		.catch((error) => {
			return errorCatch(error);
		});
}

// SET UPDATE SCALE
async function setScale(data, headers) {
	const url = `${baseURL}/plan/edit-scale`
	return await axios
		.post(url, data, { headers: { Authorization: headers } })
		.then(response => response)
		.catch(error => {
			return errorCatch(error);
		})
}

// GET TAKEOFF
async function getTakeOff(data, headers) {
	const url = `${baseURL}/test/takeoff?projectId=${data.project_id}`;
	return await axios
		.get(url, { headers: { Authorization: headers } })
		.then((response) => response)
		.catch((error) => {
			return errorCatch(error);
		});
}

// ADD TAKEOFF
async function addTakeOff(data, headers) {
	const url = `${baseURL}/test/takeoff/add`
	return await axios
		.post(url, data, { headers: { Authorization: headers } })
		.then(response => response)
		.catch(error => {
			return errorCatch(error);
		})
}

// EDIT TAKEOFF
async function editTakeOff(data, headers) {
	const url = `${baseURL}/test/takeoff/edit`
	return await axios
		.post(url, data, { headers: { Authorization: headers } })
		.then(response => response)
		.catch(error => {
			return errorCatch(error);
		})
}

// DELETE TAKEOFF
async function deleteTakeOff(data, headers) {
	const url = `${baseURL}/test/takeoff/delete`
	return await axios
		.post(url, data, { headers: { Authorization: headers } })
		.then(response => response)
		.catch(error => {
			return errorCatch(error);
		})
}

/**********************************************************************************************/
/************************************  COMPANY DATABASE  **************************************/
/**********************************************************************************************/
// 

// GET DB ITEMs
// async function getDatabaseItems(data,headers){
// 	const url = `${baseURL}/test/db-items?companyId=${data.companyId}`;
// 	return await axios
// 		.get(url,{ headers:{ Authorization: headers }})
// 		.then(response=>response)
// 		.catch(error=>{
// 			return errorCatch(error);
// 		})
// }

// GET DB ITEM DETAILS
async function getDatabaseItemDetails(data, headers) {
	const url = `${baseURL}/test/db-items?itemId=${data}`;
	return await axios
		.get(url, { headers: { Authorization: headers } })
		.then(response => response)
		.catch(error => {
			return errorCatch(error);
		})
}

// ADD DB ITEM
async function addDatabaseItem(data, headers) {
	const url = `${baseURL}/test/db-items/add`;
	return await axios
		.post(url, data, { headers: { Authorization: headers } })
		.then(response => response)
		.catch(error => {
			return errorCatch(error);
		})
}

// ADD DB ITEM BULD
async function addDatabaseBulkItems(data, headers) {
	const url = `${baseURL}/test/db-items/add-bulk`;
	return await axios
		.post(url, data, { headers: { Authorization: headers } })
		.then(response => response)
		.catch(error => {
			return errorCatch(error);
		})
}

// EDIT DB ITEM
async function editDatabaseItem(data, headers) {
	const url = `${baseURL}/test/db-items/edit`;
	return await axios
		.post(url, data, { headers: { Authorization: headers } })
		.then(response => response)
		.catch(error => {
			return errorCatch(error);
		})
}

// DELETE DB ITEM
async function deleteDatabaseItem(data, headers) {
	const url = `${baseURL}/test/db-items/delete`;
	return await axios
		.post(url, data, { header: { authorization: headers } })
		.then(response => response)
		.catch(error => {
			return errorCatch(error);
		})
}




export {
	baseURL,
	publicUrl,
	// Auth
	signUp,
	loginUser,
	logoutUser,
	forgotPass,
	resetPass,
	verify,
	updateProfile,
	// Space
	getSpaceInCompany,
	getSpaceDetails,
	addSpace,
	editSpace,
	deleteSpace,
	// Project
	createProject,
	editProject,
	deleteProject,
	getProjectDetails,
	getProjectTasks,
	addTask,
	editTask,
	deleteTask,
	getTaskDetails,
	// Company
	companyIndustries,
	getCompanyProfile,
	onBoarding,
	getCompanyDetail,
	addCompany,
	editCompany,
	deleteCompany,
	getCompanyEmployees,
	addUser,
	// EDITOR
	getPlanComments,
	addPlanComments,
	editPlanComments,
	deletePlanComments,
	setScale,
	getTakeOff,
	addTakeOff,
	editTakeOff,
	deleteTakeOff,
	// DATABASE ITEMS
	getDatabaseItemDetails,
	addDatabaseItem,
	addDatabaseBulkItems,
	editDatabaseItem,
	deleteDatabaseItem,
};
