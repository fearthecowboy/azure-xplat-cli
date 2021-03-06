// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '26d6d535-5164-443d-82f6-4c695caf7688',
    name: 'BDHadoopHumboldtCRPAdhocTestShortTerm',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_ARM_TEST_LOCATION'] = 'NorthCentralUS';
  process.env['SSHCERT'] = 'test/myCert.pem';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate5099/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate3438/configurations/gateway?api-version=2015-03-01-preview', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate5099/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate3438/configurations/gateway/operationresults/e557c944-2753-4681-a3ba-2114266cdd0b-0?api-version=2015-03-01-preview',
  'retry-after': '60',
  'azure-asyncoperation': 'https://management.azure.com:443/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate5099/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate3438/configurations/gateway/azureasyncoperations/e557c944-2753-4681-a3ba-2114266cdd0b-0?api-version=2015-03-01-preview',
  'x-ms-request-id': '931a8b0a-d9c1-4ab0-af73-c0af5ac85e38',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'ea81d84f-5fac-42e1-88c1-65b61662407b',
  'x-ms-routing-request-id': 'WESTUS:20160428T194119Z:ea81d84f-5fac-42e1-88c1-65b61662407b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 28 Apr 2016 19:41:18 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate5099/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate3438/configurations/gateway?api-version=2015-03-01-preview', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate5099/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate3438/configurations/gateway/operationresults/e557c944-2753-4681-a3ba-2114266cdd0b-0?api-version=2015-03-01-preview',
  'retry-after': '60',
  'azure-asyncoperation': 'https://management.azure.com:443/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate5099/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate3438/configurations/gateway/azureasyncoperations/e557c944-2753-4681-a3ba-2114266cdd0b-0?api-version=2015-03-01-preview',
  'x-ms-request-id': '931a8b0a-d9c1-4ab0-af73-c0af5ac85e38',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'ea81d84f-5fac-42e1-88c1-65b61662407b',
  'x-ms-routing-request-id': 'WESTUS:20160428T194119Z:ea81d84f-5fac-42e1-88c1-65b61662407b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 28 Apr 2016 19:41:18 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate5099/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate3438/configurations/gateway/azureasyncoperations/e557c944-2753-4681-a3ba-2114266cdd0b-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'f1f4b139-d063-40d7-8dc8-f40724ad1fdc',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': '40f5f9ef-489a-4f6b-82f2-241accc7dd5d',
  'x-ms-routing-request-id': 'CENTRALUS:20160428T194220Z:40f5f9ef-489a-4f6b-82f2-241accc7dd5d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 28 Apr 2016 19:42:19 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate5099/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate3438/configurations/gateway/azureasyncoperations/e557c944-2753-4681-a3ba-2114266cdd0b-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'f1f4b139-d063-40d7-8dc8-f40724ad1fdc',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': '40f5f9ef-489a-4f6b-82f2-241accc7dd5d',
  'x-ms-routing-request-id': 'CENTRALUS:20160428T194220Z:40f5f9ef-489a-4f6b-82f2-241accc7dd5d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 28 Apr 2016 19:42:19 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate5099/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate3438/configurations/gateway/azureasyncoperations/e557c944-2753-4681-a3ba-2114266cdd0b-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '1895b4f9-af7e-496b-b3ba-0b4f5b2679a2',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14814',
  'x-ms-correlation-request-id': '1f710cd3-9704-4b65-8124-019060ca35d7',
  'x-ms-routing-request-id': 'WESTUS:20160428T194321Z:1f710cd3-9704-4b65-8124-019060ca35d7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 28 Apr 2016 19:43:21 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate5099/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate3438/configurations/gateway/azureasyncoperations/e557c944-2753-4681-a3ba-2114266cdd0b-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '1895b4f9-af7e-496b-b3ba-0b4f5b2679a2',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14814',
  'x-ms-correlation-request-id': '1f710cd3-9704-4b65-8124-019060ca35d7',
  'x-ms-routing-request-id': 'WESTUS:20160428T194321Z:1f710cd3-9704-4b65-8124-019060ca35d7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 28 Apr 2016 19:43:21 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate5099/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate3438/configurations/gateway/azureasyncoperations/e557c944-2753-4681-a3ba-2114266cdd0b-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'ba645a71-9e62-4bf4-bd47-ea10b9c39629',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14952',
  'x-ms-correlation-request-id': 'b28fc085-fd00-4418-94bf-a0108a2f04a9',
  'x-ms-routing-request-id': 'WESTUS:20160428T194422Z:b28fc085-fd00-4418-94bf-a0108a2f04a9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 28 Apr 2016 19:44:21 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate5099/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate3438/configurations/gateway/azureasyncoperations/e557c944-2753-4681-a3ba-2114266cdd0b-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'ba645a71-9e62-4bf4-bd47-ea10b9c39629',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14952',
  'x-ms-correlation-request-id': 'b28fc085-fd00-4418-94bf-a0108a2f04a9',
  'x-ms-routing-request-id': 'WESTUS:20160428T194422Z:b28fc085-fd00-4418-94bf-a0108a2f04a9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 28 Apr 2016 19:44:21 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate5099/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate3438/configurations/gateway/azureasyncoperations/e557c944-2753-4681-a3ba-2114266cdd0b-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'decb4de7-33c3-4846-8def-c07f38bb565c',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14979',
  'x-ms-correlation-request-id': '801b4d08-3d83-4408-8a83-06666ecc7f17',
  'x-ms-routing-request-id': 'WESTUS:20160428T194523Z:801b4d08-3d83-4408-8a83-06666ecc7f17',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 28 Apr 2016 19:45:23 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate5099/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate3438/configurations/gateway/azureasyncoperations/e557c944-2753-4681-a3ba-2114266cdd0b-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'decb4de7-33c3-4846-8def-c07f38bb565c',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14979',
  'x-ms-correlation-request-id': '801b4d08-3d83-4408-8a83-06666ecc7f17',
  'x-ms-routing-request-id': 'WESTUS:20160428T194523Z:801b4d08-3d83-4408-8a83-06666ecc7f17',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 28 Apr 2016 19:45:23 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate5099/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate3438/configurations/gateway/azureasyncoperations/e557c944-2753-4681-a3ba-2114266cdd0b-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"Succeeded\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '22',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '5f11bf68-569d-4b6a-a831-18e4533f94a5',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14986',
  'x-ms-correlation-request-id': '7ed24de9-6d8d-4e7a-9e04-e975249c3640',
  'x-ms-routing-request-id': 'WESTUS:20160428T194624Z:7ed24de9-6d8d-4e7a-9e04-e975249c3640',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 28 Apr 2016 19:46:24 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate5099/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate3438/configurations/gateway/azureasyncoperations/e557c944-2753-4681-a3ba-2114266cdd0b-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"Succeeded\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '22',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '5f11bf68-569d-4b6a-a831-18e4533f94a5',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14986',
  'x-ms-correlation-request-id': '7ed24de9-6d8d-4e7a-9e04-e975249c3640',
  'x-ms-routing-request-id': 'WESTUS:20160428T194624Z:7ed24de9-6d8d-4e7a-9e04-e975249c3640',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 28 Apr 2016 19:46:24 GMT',
  connection: 'close' });
 return result; }]];