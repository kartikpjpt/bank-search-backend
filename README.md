# Bank Search Backend
An app to fetch Bank Name and address of a particular city in INDIA.
# Using Curl
1.``` curl -v http://ec2-3-8-127-3.eu-west-2.compute.amazonaws.com:5000/api/branches/autocomplete?q=jodhpur&limit=3&offset=0 ```

2.``` curl -v http://ec2-3-8-127-3.eu-west-2.compute.amazonaws.com:5000/api/branches/?q=chennai&limit=3&offset=1 ```

# Technology Used:
Node.js, Express.js, PostgreSQL, AWS EC2
## Database Used:
https://github.com/snarayanank2/indian_banks

# Hosted Here: 
http://ec2-3-8-127-3.eu-west-2.compute.amazonaws.com:5000/

# Application has following routes
## 1. Autocomplete API to return possible matches based on the branch name ordered by IFSC code (ascending order) with limit and offset.
a. Endpoint: /api/branches/autocomplete?q=<>
b. Example: /api/branches/autocomplete?q=jodhpur&limit=3&offset=0
c. Sample response:
```json
{
    "success": true,
    "branches": [
        {
            "ifsc": "ABNA0100339",
            "bank_id": "110",
            "branch": "JODHPUR",
            "address": "KHASRA NO.9/4,OPP.IOCL PUNP,MAIN SALAWAS ROAD, BASNI PHASE - II, VILLAGE SANGARIYA, TEHSIL JODHPUR- 324005",
            "city": "JODHPUR",
            "district": "JODHPUR",
            "state": "RAJASTHAN"
        },
        {
            "ifsc": "ALLA0210034",
            "bank_id": "11",
            "branch": "KOLKATA JODHPUR PARK",
            "address": "505, JODHPUR PARK,KOLKATA",
            "city": "KOLKATA",
            "district": "KOLKATA",
            "state": "WEST BENGAL"
        },
        {
            "ifsc": "ALLA0210275",
            "bank_id": "11",
            "branch": "JODHPUR",
            "address": "92, RESIDENCY ROAD,  JODHPUR",
            "city": "JODHPUR",
            "district": "JODHPUR",
            "state": "RAJASTHAN"
        }
    ]
}
```

## 2. Search API to return possible matches across all columns and all rows, ordered by IFSC code (ascending order) with limit and offset.
a. Endpoint: /api/branches?q=<>
b. Example: /api/branches/?q=chennai&limit=3&offset=1
c. Sample response
```json
{
    "success": true,
    "branches": [
        {
            "ifsc": "ALLA0210218",
            "bank_id": "11",
            "branch": "MOUNT ROAD BRANCH  CHENNAI",
            "address": "41, ANNA SALAI, MOUNT ROAD, CHENNAI-2",
            "city": "CHENNAI",
            "district": "CHENNAI",
            "state": "TAMIL NADU"
        },
        {
            "ifsc": "ALLA0210407",
            "bank_id": "11",
            "branch": "GEORGE TOWN CHENNAI",
            "address": "49, ARMENIAN STREET,OREINTAL BUILDING,GEORGE TOWN,PIN - 600 001",
            "city": "CHENNAI",
            "district": "CHENNAI",
            "state": "TAMIL NADU"
        },
        {
            "ifsc": "ALLA0210724",
            "bank_id": "11",
            "branch": "JAWAHARNAGAR",
            "address": "12, FIRST MAIN ROAD, JAWAHARNAGAR, CHENNAI - 600082",
            "city": "CHENNAI",
            "district": "CHENNAI",
            "state": "TAMIL NADU"
        }
    ]
}
```
