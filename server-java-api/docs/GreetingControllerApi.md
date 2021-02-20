# GreetingControllerApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**greeting**](GreetingControllerApi.md#greeting) | **GET** /api/greeting | 

<a name="greeting"></a>
# **greeting**
> Greeting greeting(name)



### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.GreetingControllerApi;


GreetingControllerApi apiInstance = new GreetingControllerApi();
String name = "World"; // String | 
try {
    Greeting result = apiInstance.greeting(name);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling GreetingControllerApi#greeting");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**|  | [optional] [default to World]

### Return type

[**Greeting**](Greeting.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

