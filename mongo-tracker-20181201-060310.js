
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

/** test.port indexes **/
db.getCollection("test.port").ensureIndex({
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
  "_id": ObjectId("5be3074b275b2f5016000037"),
  "name": {
    "fname": "varun",
    "lname": "kommanaboina"
  },
  "password": "password",
  "DOB": "30-july-1993",
  "empid": NumberInt(88123),
  "DOJ": "8-dec-2017",
  "Plevel": NumberInt(2),
  "dept": "database",
  "designation": "database administrator"
});
db.getCollection("employee").insert({
  "_id": ObjectId("5be31676275b2f5016000038"),
  "name": {
    "fname": "arjun",
    "lname": "A"
  },
  "password": "password",
  "DOB": "27-sep-1989",
  "empid": NumberInt(87143),
  "DOJ": "8-dec-2017",
  "Plevel": NumberInt(2),
  "dept": "server",
  "designation": "server administrator"
});
db.getCollection("employee").insert({
  "_id": ObjectId("5be316c3275b2ff414000034"),
  "name": {
    "fname": "nagesh",
    "lname": "A"
  },
  "password": "password",
  "DOB": "5-Nov-1993",
  "empid": NumberInt(87144),
  "DOJ": "8-dec-2017",
  "Plevel": NumberInt(2),
  "dept": "ems",
  "designation": "server administrator"
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

/** shiftRegister records **/
db.getCollection("shiftRegister").insert({
  "_id": ObjectId("5be48768275b2f201100002e"),
  "date": ISODate("2018-11-08T18:58:48.0Z"),
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
  "date": ISODate("2018-11-08T18:59:11.0Z"),
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
db.getCollection("test").insert({
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
    "usertype": "vendor",
    "username": "varun"
  },
  "ips": {
    "public": "10.99.189.47",
    "private": "10.189.47.75",
    "gateway": "10.189.47.75"
  },
  "port": [
    {
      "portNo": "808343",
      "portName": "http",
      "reqBy": "client",
      "reason": "test",
      "timePeriod": "1hr",
      "securityThreat": "sql injection",
      "from": "10.189.47.75",
      "to": "10.189.47.74"
    },
    {
      "portNo": "88",
      "portName": "http",
      "reqBy": "client",
      "reason": "test",
      "timePeriod": "1hr",
      "securityThreat": "sql injection",
      "from": "10.189.47.75",
      "to": "10.189.47.74"
    },
    {
      "portNo": "88443432",
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
    [
      {
        "nickname": "Dmitriy",
        "score": NumberInt(33)
      },
      {
        "nickname": "Alexander",
        "score": NumberInt(37)
      },
      {
        "nickname": "Git",
        "score": NumberInt(26)
      }
    ],
    [
      {
        "nickname": "Dmitriy",
        "score": NumberInt(33)
      },
      {
        "nickname": "Alexander",
        "score": NumberInt(37)
      },
      {
        "nickname": "Git",
        "score": NumberInt(26)
      }
    ]
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
  },
  "port[0]": {
    "portNo": "808343444"
  },
  "port[1]": {
    "portNo": NumberInt(4444),
    "reason": NumberInt(4444),
    "rdsadeason": NumberInt(4444)
  },
  "HDD": "300",
  "processor": "7.43",
  "gateway": "5555",
  "serverTypeproduction": "production"
});
db.getCollection("test").insert({
  "_id": ObjectId("5c012095275b2fc80d00002a"),
  "name": "varun",
  "email": "varun@gmail.com",
  "username": "varun",
  "password": "5f4dcc3b5aa765d61d8327deb882cf99",
  "zipcode": "43243"
});

/** test.port records **/
db.getCollection("test.port").insert({
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
db.getCollection("test.port").insert({
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
db.getCollection("test.port").insert({
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

/** visits records **/

/** web records **/
db.getCollection("web").insert({
  "_id": ObjectId("5be4850f275b2f201100002a"),
  "vm_id": "4324324324",
  "hostingDetails": {
    "hostingType": "staging",
    "hostedDate": ISODate("2018-11-08T18:48:47.0Z"),
    "remark": "remarks if any"
  },
  "type": "web application",
  "appName": "hmis",
  "deptnmae": "infotech",
  "vendorDetails": {
    "vendor": "vendorName",
    "contactPerson": "text",
    "email": "email@email.com",
    "contactNo": "43243423432",
    "designation": "developer"
  },
  "VPN": {
    "VPN": "VPN collection id",
    "RDP": "rdp collection id"
  },
  "url": "http://wenbsite.com",
  "auditCert": {
    "status": "yes",
    "issuedate": ISODate("2018-11-08T18:48:47.0Z"),
    "expdate": ISODate("2018-11-08T18:48:47.0Z"),
    "path": "soft copy path",
    "remark": "text"
  },
  "ssl": {
    "status": "yes",
    "expiration": ISODate("2018-11-08T18:48:47.0Z")
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
  "securityAudit": {
    "status": "yes",
    "validatedBy": "String",
    "Validity": ISODate("2018-11-08T18:48:47.0Z"),
    "expiryDate": ISODate("2018-11-08T18:48:47.0Z"),
    "remark": "text"
  },
  "comments": [
    {
      "commentby": "varun",
      "date": ISODate("2018-11-08T18:48:47.0Z"),
      "comment": "dsadas"
    },
    {
      "commentby": "varun",
      "date": ISODate("2018-11-08T18:48:47.0Z"),
      "comment": "dsadas"
    }
  ]
});
db.getCollection("web").insert({
  "_id": ObjectId("5be4853b275b2fe40b00002c"),
  "vm_id": "4324324324",
  "hostingDetails": {
    "hostingType": "staging",
    "hostedDate": ISODate("2018-11-08T18:49:31.0Z"),
    "remark": "remarks if any"
  },
  "type": "web application",
  "appName": "hmis db",
  "deptnmae": "infotech",
  "vendorDetails": {
    "vendor": "vendorName",
    "contactPerson": "text",
    "email": "email@email.com",
    "contactNo": "43243423432",
    "designation": "developer"
  },
  "VPN": {
    "VPN": "VPN collection id",
    "RDP": "rdp collection id"
  },
  "url": "http://wenbsite.com",
  "auditCert": {
    "status": "yes",
    "issuedate": ISODate("2018-11-08T18:49:31.0Z"),
    "expdate": ISODate("2018-11-08T18:49:31.0Z"),
    "path": "soft copy path",
    "remark": "text"
  },
  "ssl": {
    "status": "yes",
    "expiration": ISODate("2018-11-08T18:49:31.0Z")
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
  "securityAudit": {
    "status": "yes",
    "validatedBy": "String",
    "Validity": ISODate("2018-11-08T18:49:31.0Z"),
    "expiryDate": ISODate("2018-11-08T18:49:31.0Z"),
    "remark": "text"
  },
  "comments": [
    {
      "commentby": "varun",
      "date": ISODate("2018-11-08T18:49:31.0Z"),
      "comment": "dsadas"
    },
    {
      "commentby": "varun",
      "date": ISODate("2018-11-08T18:49:31.0Z"),
      "comment": "dsadas"
    }
  ]
});
db.getCollection("web").insert({
  "_id": ObjectId("5be4855e275b2f201100002b"),
  "vm_id": "4324324324",
  "hostingDetails": {
    "hostingType": "production",
    "hostedDate": ISODate("2018-11-08T18:50:06.0Z"),
    "remark": "remarks if any"
  },
  "type": "web application",
  "appName": "ems db",
  "deptnmae": "infotech",
  "vendorDetails": {
    "vendor": "vendorName",
    "contactPerson": "text",
    "email": "email@email.com",
    "contactNo": "43243423432",
    "designation": "developer"
  },
  "VPN": {
    "VPN": "VPN collection id",
    "RDP": "rdp collection id"
  },
  "url": "http://wenbsite.com",
  "auditCert": {
    "status": "yes",
    "issuedate": ISODate("2018-11-08T18:50:06.0Z"),
    "expdate": ISODate("2018-11-08T18:50:06.0Z"),
    "path": "soft copy path",
    "remark": "text"
  },
  "ssl": {
    "status": "yes",
    "expiration": ISODate("2018-11-08T18:50:06.0Z")
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
  "securityAudit": {
    "status": "yes",
    "validatedBy": "String",
    "Validity": ISODate("2018-11-08T18:50:06.0Z"),
    "expiryDate": ISODate("2018-11-08T18:50:06.0Z"),
    "remark": "text"
  },
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
  ]
});
