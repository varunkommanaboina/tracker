
/** ESXI indexes **/
db.getCollection("ESXI").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** SR indexes **/
db.getCollection("SR").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** VM indexes **/
db.getCollection("VM").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** VPN indexes **/
db.getCollection("VPN").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** employee indexes **/
db.getCollection("employee").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** patches indexes **/
db.getCollection("patches").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** port indexes **/
db.getCollection("port").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** shiftRegister indexes **/
db.getCollection("shiftRegister").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** test indexes **/
db.getCollection("test").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** visits indexes **/
db.getCollection("visits").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** web indexes **/
db.getCollection("web").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** ESXI records **/
db.getCollection("ESXI").insert({
  "_id": ObjectId("5be48018275b2f5016000042"),
  "cloud": "database",
  "serverName": "database",
  "serverIp": "10.32.32.4",
  "vms": [
    4343243434,
    4234344324,
    42342344234,
    NumberInt(4324324)
  ],
  "hardware": {
    "ram": "50",
    "HDD": "1000",
    "processor": "3cores"
  },
  "SrNo": [
    NumberInt(23123),
    NumberInt(3123),
    NumberInt(3123),
    NumberInt(31233)
  ]
});
db.getCollection("ESXI").insert({
  "_id": ObjectId("5be483f1275b2ff414000037"),
  "cloud": "application",
  "serverName": "application",
  "serverIp": "10.32.32.5",
  "vms": [
    4343243434,
    4234344324,
    42342344234,
    NumberInt(4324324)
  ],
  "hardware": {
    "ram": "50",
    "HDD": "1000",
    "processor": "3"
  },
  "SrNo": [
    NumberInt(23123),
    NumberInt(3123),
    NumberInt(3123),
    NumberInt(31233)
  ]
});
db.getCollection("ESXI").insert({
  "_id": ObjectId("5be48402275b2f5016000043"),
  "cloud": "ems",
  "serverName": "ems",
  "serverIp": "10.32.32.5",
  "vms": [
    4343243434,
    4234344324,
    42342344234,
    NumberInt(4324324)
  ],
  "hardware": {
    "ram": "50",
    "HDD": "1000",
    "processor": "3"
  },
  "SrNo": [
    NumberInt(23123),
    NumberInt(3123),
    NumberInt(3123),
    NumberInt(31233)
  ]
});

/** SR records **/
db.getCollection("SR").insert({
  "_id": ObjectId("5be485d8275b2fe40b00002d"),
  "collection": NumberInt(321312321),
  "requestRaisedBy": "varun",
  "AssignedTo": "arjun",
  "Desscription": "Desscription",
  "status": "underprocess",
  "comments": [
    {
      "commentby": "varun",
      "date": ISODate("2018-11-08T18:52:08.0Z"),
      "commbent": "comment text"
    }
  ]
});
db.getCollection("SR").insert({
  "_id": ObjectId("5be485e8275b2f201100002c"),
  "collection": NumberInt(321312321),
  "requestRaisedBy": "arjun",
  "AssignedTo": "varun",
  "Desscription": "Desscription",
  "status": "underprocess",
  "comments": [
    {
      "commentby": "varun",
      "date": ISODate("2018-11-08T18:52:24.0Z"),
      "commbent": "comment text"
    }
  ]
});
db.getCollection("SR").insert({
  "_id": ObjectId("5be48670275b2fe40b00002e"),
  "collection": NumberInt(321312321),
  "requestRaisedBy": "arjun",
  "AssignedTo": "varun",
  "Desscription": "Desscription",
  "status": "underprocess",
  "comments": [
    {
      "commentby": "varun",
      "date": ISODate("2018-11-08T18:54:40.0Z"),
      "commbent": "comment text"
    }
  ]
});
db.getCollection("SR").insert({
  "_id": ObjectId("5be486a3275b2f201100002d"),
  "collection": NumberInt(321312321),
  "requestRaisedBy": "chaitu",
  "AssignedTo": "varun",
  "Desscription": "Desscription",
  "status": "underprocess",
  "comments": [
    {
      "commentby": "varun",
      "date": ISODate("2018-11-08T18:55:31.0Z"),
      "commbent": "comment text"
    }
  ]
});

/** VM records **/
db.getCollection("VM").insert({
  "_id": ObjectId("5be48456275b2f2011000029"),
  "VMFunction": "Archives and Archaeology(e-teor)",
  "hostName": "GSDCDEPTAPP02",
  "vHardware": {
    "ram": "3GB",
    "HDD": "200",
    "processor": "value"
  },
  "serverType": "staging",
  "RDlogins": {
    "usertype": "sdc",
    "username": "varun"
  },
  "ips": {
    "public": "10.189.47.75",
    "private": "10.189.47.75",
    "gateway": "10.189.47.75"
  },
  "port": [
    {
      "portNo": "80",
      "portName": "http",
      "reqBy": "client",
      "reason": "test",
      "timePeriod": "1hr",
      "securityThreat": "sql injection",
      "from": "10.189.47.75",
      "to": "10.189.47.74"
    },
    {
      "portNo": "8080",
      "portName": "http",
      "reqBy": "client",
      "reason": "test",
      "timePeriod": "1hr",
      "securityThreat": "sql injection",
      "from": "10.189.47.75",
      "to": "10.189.47.74"
    }
  ],
  "internet": "yes",
  "os": "windows 2012R2",
  "patches": {
    "patch": "patch id collection",
    "date": "12-07-1018",
    "updatedBy": "arjun",
    "status": "yes",
    "comments": "comments"
  },
  "softwaresInstalled": [
    {
      "name": "wamp",
      "licence": "no",
      "remarks": "text"
    },
    {
      "name": "ms sql",
      "licence": "yes",
      "remarks": "text"
    }
  ],
  "antiVirus": {
    "antiVirus": "type",
    "licence": "text",
    "expiryDate": ISODate("2018-11-08T18:45:42.0Z")
  },
  "storage": {
    "Backupdate": ISODate("2018-11-08T18:45:42.0Z"),
    "sourcecodeDir": "string",
    "sourcecodeDirSize": "1GB",
    "backupTap": "yes",
    "backupToTapeOn": ISODate("2018-11-08T18:45:42.0Z"),
    "backupToTapeby": "text"
  },
  "webapps": [
    "32423rfwer4324",
    "32423rfwer4324",
    "32423rfwer4324",
    "32423rfwer4324"
  ],
  "servicerReqNo": [
    NumberInt(434344),
    NumberInt(43243),
    NumberInt(4234),
    NumberInt(34324)
  ],
  "visits": [
    4324432432,
    4324234234,
    42342342343
  ],
  "comments": {
    "commentby": "varun",
    "date": ISODate("2018-11-08T18:45:42.0Z"),
    "comment": "dsadas"
  },
  "clone": {
    "name": "webserverclone2",
    "date": ISODate("2018-11-08T18:45:42.0Z")
  }
});
db.getCollection("VM").insert({
  "_id": ObjectId("5be48478275b2fe40b00002b"),
  "VMFunction": "HMIS",
  "hostName": "GSDCDEPTAPP01",
  "vHardware": {
    "ram": "3GB",
    "HDD": "200",
    "processor": "value"
  },
  "serverType": "production",
  "RDlogins": {
    "usertype": "sdc",
    "username": "varun"
  },
  "ips": {
    "public": "10.189.47.75",
    "private": "10.189.47.75",
    "gateway": "10.189.47.75"
  },
  "port": [
    {
      "portNo": "80",
      "portName": "http",
      "reqBy": "client",
      "reason": "test",
      "timePeriod": "1hr",
      "securityThreat": "sql injection",
      "from": "10.189.47.75",
      "to": "10.189.47.74"
    },
    {
      "portNo": "8080",
      "portName": "http",
      "reqBy": "client",
      "reason": "test",
      "timePeriod": "1hr",
      "securityThreat": "sql injection",
      "from": "10.189.47.75",
      "to": "10.189.47.74"
    }
  ],
  "internet": "yes",
  "os": "windows 2012R2",
  "patches": {
    "patch": "patch id collection",
    "date": "12-07-1018",
    "updatedBy": "arjun",
    "status": "yes",
    "comments": "comments"
  },
  "softwaresInstalled": [
    {
      "name": "wamp",
      "licence": "no",
      "remarks": "text"
    },
    {
      "name": "ms sql",
      "licence": "yes",
      "remarks": "text"
    }
  ],
  "antiVirus": {
    "antiVirus": "type",
    "licence": "text",
    "expiryDate": ISODate("2018-11-08T18:46:16.0Z")
  },
  "storage": {
    "Backupdate": ISODate("2018-11-08T18:46:16.0Z"),
    "sourcecodeDir": "string",
    "sourcecodeDirSize": "1GB",
    "backupTap": "yes",
    "backupToTapeOn": ISODate("2018-11-08T18:46:16.0Z"),
    "backupToTapeby": "text"
  },
  "webapps": [
    "32423rfwer4324",
    "32423rfwer4324",
    "32423rfwer4324",
    "32423rfwer4324"
  ],
  "servicerReqNo": [
    NumberInt(434344),
    NumberInt(43243),
    NumberInt(4234),
    NumberInt(34324)
  ],
  "visits": [
    4324432432,
    4324234234,
    42342342343
  ],
  "comments": {
    "commentby": "varun",
    "date": ISODate("2018-11-08T18:46:16.0Z"),
    "comment": "dsadas"
  },
  "clone": {
    "name": "webserverclone2",
    "date": ISODate("2018-11-08T18:46:16.0Z")
  }
});
db.getCollection("VM").insert({
  "_id": ObjectId("5c2680d45d5bac6011000029"),
  "VMFunction": "HMIS",
  "hostName": "GSDCDEPTAPP01",
  "vHardware": {
    "ram": "3GB",
    "HDD": "200",
    "processor": "value"
  },
  "serverType": "production",
  "RDlogins": {
    "usertype": "sdc",
    "username": "varun"
  },
  "ips": {
    "public": "10.189.47.75",
    "private": "10.189.47.75",
    "gateway": "10.189.47.75"
  },
  "port": [
    {
      "portNo": "8080",
      "portName": "http",
      "reqBy": "client",
      "reason": "test",
      "timePeriod": "1hr",
      "securityThreat": "sql injection",
      "from": "10.189.47.75",
      "to": "10.189.47.74"
    },
    {
      "portNo": "8080",
      "portName": "http",
      "reqBy": "client",
      "reason": "test",
      "timePeriod": "1hr",
      "securityThreat": "sql injection",
      "from": "10.189.47.75",
      "to": "10.189.47.74"
    },
    {
      "portNo": "8080",
      "portName": "http",
      "reqBy": "client",
      "reason": "test",
      "timePeriod": "1hr",
      "securityThreat": "sql injection",
      "from": "10.189.47.75",
      "to": "10.189.47.74"
    },
    {
      "portNo": "8080",
      "portName": "http",
      "reqBy": "client",
      "reason": "test",
      "timePeriod": "1hr",
      "securityThreat": "sql injection",
      "from": "10.189.47.75",
      "to": "10.189.47.74"
    },
    {
      "portNo": "8080",
      "portName": "http",
      "reqBy": "client",
      "reason": "test",
      "timePeriod": "1hr",
      "securityThreat": "sql injection",
      "from": "10.189.47.75",
      "to": "10.189.47.74"
    },
    {
      "portNo": "8080",
      "portName": "http",
      "reqBy": "client",
      "reason": "test",
      "timePeriod": "1hr",
      "securityThreat": "sql injection",
      "from": "10.189.47.75",
      "to": "10.189.47.74"
    },
    {
      "portNo": "8080",
      "portName": "http",
      "reqBy": "client",
      "reason": "test",
      "timePeriod": "1hr",
      "securityThreat": "sql injection",
      "from": "10.189.47.75",
      "to": "10.189.47.74"
    },
    {
      "portNo": "8080",
      "portName": "http",
      "reqBy": "client",
      "reason": "test",
      "timePeriod": "1hr",
      "securityThreat": "sql injection",
      "from": "10.189.47.75",
      "to": "10.189.47.74"
    },
    {
      "portNo": "8080",
      "portName": "http",
      "reqBy": "client",
      "reason": "test",
      "timePeriod": "1hr",
      "securityThreat": "sql injection",
      "from": "10.189.47.75",
      "to": "10.189.47.74"
    },
    {
      "portNo": "8080",
      "portName": "http",
      "reqBy": "client",
      "reason": "test",
      "timePeriod": "1hr",
      "securityThreat": "sql injection",
      "from": "10.189.47.75",
      "to": "10.189.47.74"
    },
    {
      "portNo": "8080",
      "portName": "http",
      "reqBy": "client",
      "reason": "test",
      "timePeriod": "1hr",
      "securityThreat": "sql injection",
      "from": "10.189.47.75",
      "to": "10.189.47.74"
    },
    {
      "portNo": "8080",
      "portName": "http",
      "reqBy": "client",
      "reason": "test",
      "timePeriod": "1hr",
      "securityThreat": "sql injection",
      "from": "10.189.47.75",
      "to": "10.189.47.74"
    },
    {
      "portNo": "8080",
      "portName": "http",
      "reqBy": "client",
      "reason": "test",
      "timePeriod": "1hr",
      "securityThreat": "sql injection",
      "from": "10.189.47.75",
      "to": "10.189.47.74"
    },
    {
      "portNo": "8080",
      "portName": "http",
      "reqBy": "client",
      "reason": "test",
      "timePeriod": "1hr",
      "securityThreat": "sql injection",
      "from": "10.189.47.75",
      "to": "10.189.47.74"
    },
    {
      "portNo": "8080",
      "portName": "http",
      "reqBy": "client",
      "reason": "test",
      "timePeriod": "1hr",
      "securityThreat": "sql injection",
      "from": "10.189.47.75",
      "to": "10.189.47.74"
    },
    {
      "portNo": "8080",
      "portName": "http",
      "reqBy": "client",
      "reason": "test",
      "timePeriod": "1hr",
      "securityThreat": "sql injection",
      "from": "10.189.47.75",
      "to": "10.189.47.74"
    },
    {
      "portNo": "8080",
      "portName": "http",
      "reqBy": "client",
      "reason": "test",
      "timePeriod": "1hr",
      "securityThreat": "sql injection",
      "from": "10.189.47.75",
      "to": "10.189.47.74"
    },
    {
      "portNo": "8080",
      "portName": "http",
      "reqBy": "client",
      "reason": "test",
      "timePeriod": "1hr",
      "securityThreat": "sql injection",
      "from": "10.189.47.75",
      "to": "10.189.47.74"
    },
    {
      "portNo": "8080",
      "portName": "http",
      "reqBy": "client",
      "reason": "test",
      "timePeriod": "1hr",
      "securityThreat": "sql injection",
      "from": "10.189.47.75",
      "to": "10.189.47.74"
    },
    {
      "portNo": "8080",
      "portName": "http",
      "reqBy": "client",
      "reason": "test",
      "timePeriod": "1hr",
      "securityThreat": "sql injection",
      "from": "10.189.47.75",
      "to": "10.189.47.74"
    },
    {
      "portNo": "8080",
      "portName": "http",
      "reqBy": "client",
      "reason": "test",
      "timePeriod": "1hr",
      "securityThreat": "sql injection",
      "from": "10.189.47.75",
      "to": "10.189.47.74"
    },
    {
      "portNo": "8080",
      "portName": "http",
      "reqBy": "client",
      "reason": "test",
      "timePeriod": "1hr",
      "securityThreat": "sql injection",
      "from": "10.189.47.75",
      "to": "10.189.47.74"
    },
    {
      "portNo": "8080",
      "portName": "http",
      "reqBy": "client",
      "reason": "test",
      "timePeriod": "1hr",
      "securityThreat": "sql injection",
      "from": "10.189.47.75",
      "to": "10.189.47.74"
    },
    {
      "portNo": "8080",
      "portName": "http",
      "reqBy": "client",
      "reason": "test",
      "timePeriod": "1hr",
      "securityThreat": "sql injection",
      "from": "10.189.47.75",
      "to": "10.189.47.74"
    },
    {
      "portNo": "8080",
      "portName": "http",
      "reqBy": "client",
      "reason": "test",
      "timePeriod": "1hr",
      "securityThreat": "sql injection",
      "from": "10.189.47.75",
      "to": "10.189.47.74"
    },
    {
      "portNo": "8080",
      "portName": "http",
      "reqBy": "client",
      "reason": "test",
      "timePeriod": "1hr",
      "securityThreat": "sql injection",
      "from": "10.189.47.75",
      "to": "10.189.47.74"
    },
    {
      "portNo": "8080",
      "portName": "http",
      "reqBy": "client",
      "reason": "test",
      "timePeriod": "1hr",
      "securityThreat": "sql injection",
      "from": "10.189.47.75",
      "to": "10.189.47.74"
    },
    {
      "portNo": "8080",
      "portName": "http",
      "reqBy": "client",
      "reason": "test",
      "timePeriod": "1hr",
      "securityThreat": "sql injection",
      "from": "10.189.47.75",
      "to": "10.189.47.74"
    },
    {
      "portNo": "8083",
      "portName": "http",
      "reqBy": "client",
      "reason": "test",
      "timePeriod": "1hr",
      "securityThreat": "sql injection",
      "from": "10.189.47.75",
      "to": "10.189.47.74"
    }
  ],
  "internet": "yes",
  "os": "windows 2012R2",
  "patches": {
    "patch": "patch id collection",
    "date": "12-07-1018",
    "updatedBy": "arjun",
    "status": "yes",
    "comments": "comments"
  },
  "softwaresInstalled": [
    {
      "name": "wamp",
      "licence": "no",
      "remarks": "text"
    },
    {
      "name": "ms sql",
      "licence": "yes",
      "remarks": "text"
    }
  ],
  "antiVirus": {
    "antiVirus": "type",
    "licence": "text",
    "expiryDate": ISODate("2018-11-08T18:46:16.0Z")
  },
  "storage": {
    "Backupdate": ISODate("2018-11-08T18:46:16.0Z"),
    "sourcecodeDir": "string",
    "sourcecodeDirSize": "1GB",
    "backupTap": "yes",
    "backupToTapeOn": ISODate("2018-11-08T18:46:16.0Z"),
    "backupToTapeby": "text"
  },
  "webapps": [
    "32423rfwer4324",
    "32423rfwer4324",
    "32423rfwer4324",
    "32423rfwer4324"
  ],
  "servicerReqNo": [
    NumberInt(434344),
    NumberInt(43243),
    NumberInt(4234),
    NumberInt(34324)
  ],
  "visits": [
    4324432432,
    4324234234,
    42342342343
  ],
  "comments": {
    "commentby": "varun",
    "date": ISODate("2018-11-08T18:46:16.0Z"),
    "comment": "dsadas"
  },
  "clone": {
    "name": "webserverclone2",
    "date": ISODate("2018-11-08T18:46:16.0Z")
  }
});

/** VPN records **/
db.getCollection("VPN").insert({
  "_id": ObjectId("5be317f5275b2ff414000035"),
  "user_type": "vendor",
  "vendorNname": "itg",
  "username": "itg",
  "password": "343saar",
  "comments": [
    {
      "commentby": "varun",
      "date": "12-07-2018",
      "comment": "comment by varun"
    },
    {
      "commentby": "nagesh",
      "date": "12-07-2018",
      "comment": "comment by nagesh"
    }
  ]
});
db.getCollection("VPN").insert({
  "_id": ObjectId("5be31955275b2ff414000036"),
  "user_type": "vendor",
  "vendorNname": "doit",
  "username": "itg",
  "password": "343saar",
  "comments": [
    {
      "commentby": "varun",
      "date": "12-07-2018",
      "comment": "comment by varun"
    },
    {
      "commentby": "nagesh",
      "date": "12-07-2018",
      "comment": "comment by nagesh"
    }
  ]
});
db.getCollection("VPN").insert({
  "_id": ObjectId("5be31977275b2f5016000039"),
  "user_type": "vendor",
  "vendorNname": "info",
  "username": "info",
  "password": "343saar",
  "comments": [
    {
      "commentby": "varun",
      "date": "12-07-2018",
      "comment": "comment by varun"
    },
    {
      "commentby": "nagesh",
      "date": "12-07-2018",
      "comment": "comment by nagesh"
    }
  ]
});

/** employee records **/
db.getCollection("employee").insert({
  "_id": ObjectId("5c268c9f5d5bac4417000029"),
  "name": "varun",
  "email": "varun@gmail.com",
  "password": "5f4dcc3b5aa765d61d8327deb882cf99",
  "DOB": "",
  "empid": "",
  "DOJ": "",
  "Plevel": "",
  "dept": "",
  "designation": "",
  "locked": NumberInt(0),
  "gender": "",
  "username": {
    "fname": "",
    "lname": ""
  }
});

/** patches records **/
db.getCollection("patches").insert({
  "_id": ObjectId("5be4882a275b2f201100002f"),
  "patch": "security",
  "patchname": "name any",
  "date": ISODate("2018-11-08T19:02:02.0Z"),
  "PatchDescription": "full desc"
});
db.getCollection("patches").insert({
  "_id": ObjectId("5be4886a275b2fe40b000030"),
  "patch": "system",
  "patchname": "name any",
  "date": ISODate("2018-11-08T19:03:06.0Z"),
  "PatchDescription": "full desc"
});

/** port records **/
db.getCollection("port").insert({
  "_id": ObjectId("5be5b876275b2f5016000044"),
  "portNo": "80",
  "portName": "http",
  "reqBy": "client",
  "reason": "test",
  "timePeriod": "1hr",
  "securityThreat": "sql injection",
  "from": "10.189.47.75",
  "to": "10.189.47.74"
});
db.getCollection("port").insert({
  "_id": ObjectId("5be5b8bd275b2f2011000031"),
  "portNo": "80",
  "portName": "http",
  "reqBy": "client",
  "reason": "test",
  "timePeriod": "1hr",
  "securityThreat": "sql injection",
  "from": "10.189.47.75",
  "to": "10.189.47.74"
});
db.getCollection("port").insert({
  "_id": ObjectId("5be5b8ce275b2f5016000045"),
  "portNo": "80",
  "portName": "http",
  "reqBy": "client",
  "reason": "test",
  "timePeriod": "1hr",
  "securityThreat": "sql injection",
  "from": "10.189.47.75",
  "to": "10.189.47.74"
});

/** shiftRegister records **/
db.getCollection("shiftRegister").insert({
  "_id": ObjectId("5be48768275b2f201100002e"),
  "date": "2018-11-08 00:00:01",
  "name": "varun",
  "shift": NumberInt(1),
  "Activities": [
    "dasdasda",
    "asdasdasd",
    "dasdasdasdas",
    "adsdasdsa"
  ],
  "comments": [
    {
      "commentBy": "varun",
      "date": ISODate("2018-11-08T18:58:48.0Z"),
      "comment": "sample comment"
    },
    {
      "commentBy": "varun",
      "date": ISODate("2018-11-08T18:58:48.0Z"),
      "comment": "sample comment 2"
    }
  ]
});
db.getCollection("shiftRegister").insert({
  "_id": ObjectId("5be4877f275b2fe40b00002f"),
  "date": "2018-11-09 00:00:12",
  "name": "nagesh",
  "shift": NumberInt(1),
  "Activities": [
    "dasdasda",
    "asdasdasd",
    "dasdasdasdas",
    "adsdasdsa"
  ],
  "comments": [
    {
      "commentBy": "varun",
      "date": ISODate("2018-11-08T18:59:11.0Z"),
      "comment": "sample comment"
    },
    {
      "commentBy": "varun",
      "date": ISODate("2018-11-08T18:59:11.0Z"),
      "comment": "sample comment 2"
    }
  ]
});
db.getCollection("shiftRegister").insert({
  "_id": ObjectId("5c0452f95d5bac4c04000029"),
  "date": "2018-11-19",
  "name": "nagesh",
  "shift": NumberInt(1),
  "Activities": [
    "dasdasda",
    "asdasdasd",
    "dasdasdasdas",
    "adsdasdsa"
  ],
  "comments": [
    {
      "commentBy": "varun",
      "date": ISODate("2018-11-08T18:59:11.0Z"),
      "comment": "sample comment"
    },
    {
      "commentBy": "varun",
      "date": ISODate("2018-11-08T18:59:11.0Z"),
      "comment": "sample comment 2"
    }
  ]
});

/** test records **/

/** visits records **/

/** web records **/
db.getCollection("web").insert({
  "_id": ObjectId("5c23f3835d5bac701f000029"),
  "vm_id": "4324324324",
  "hostingDetails": {
    "hostingType": "production",
    "hostedDate": ISODate("2018-11-08T18:50:06.0Z"),
    "remark": "remarks if any"
  },
  "type": "web application",
  "appName": "ems db",
  "vendorDetails": {
    "vendor": "GEL",
    "contactPerson": "text",
    "email": "email@email.com",
    "contactNo": "43243423432",
    "designation": "developer"
  },
  "VPN": {
    "VPN": "VPN collection id",
    "RDP": "rdp collection id"
  },
  "url": "http://wenDASDbsite.com",
  "auditCert": {
    "status": "yes",
    "valid": "yes",
    "validatedBy": "company",
    "issuedate": ISODate("2018-11-08T18:50:06.0Z"),
    "expdate": ISODate("2018-11-08T18:50:06.0Z"),
    "path": "soft copy path",
    "remark": "text"
  },
  "ssl": {
    "status": "No",
    "expiration": ISODate("2018-11-08T18:50:06.0Z"),
    "installed": ISODate("2018-11-08T18:50:06.0Z")
  },
  "webServer": "apache",
  "databaseSoftware": "mysql",
  "visits": [
    NumberInt(213213),
    NumberInt(4324234),
    NumberInt(423423432)
  ],
  "servicerReqNo": [
    NumberInt(34234423),
    NumberInt(4234),
    NumberInt(324),
    NumberInt(4324)
  ],
  "comments": [
    {
      "commentby": "varun",
      "date": ISODate("2018-11-08T18:50:06.0Z"),
      "comment": "dsadas"
    },
    {
      "commentby": "varun",
      "date": ISODate("2018-11-08T18:50:06.0Z"),
      "comment": "dsadas"
    }
  ],
  "deptname": "infotech sadsad asdsadsa sad asdsadsad saddsadsdsa"
});
