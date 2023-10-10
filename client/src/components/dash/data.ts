const bookingData = [
  {
    _id: {
      $oid: "64e9af721a67cc970f211f1e",
    },
    hotel: {
      $oid: "64e9ad981a67cc970f211ef1",
    },
    serialNumber: "1",
    guestName: "ARADHYA SAHOO",
    checkInDate: {
      $date: "2023-09-21T00:00:00.000Z",
    },
    checkOutDate: {
      $date: "2023-09-22T00:00:00.000Z",
    },
    roomCategory: "Deluxe",
    numberOfRooms: 2,
    numberOfPersons: 4,
    bookingAmount: 7800,
    advanceAmount: 3800,
    dueAmount: 4000,
    advanceDate: {
      $date: "2023-08-21T00:00:00.000Z",
    },
    bookingSource: "Sayngo",
    bookingBy: "SUBHAM SAHOO",
    plan: "CP",
    contactNumber: "9002009792",
    remarks: "UPI",
    addedBy: {
      $oid: "64e9adef1a67cc970f211f01",
    },
    status: "CONFIRMED",
    accountType: "Hotel",
    createdAt: {
      $date: "2023-10-10T07:53:22.270Z",
    },
    updatedAt: {
      $date: "2023-08-26T07:53:22.270Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "64e9bd0d8985b522199c257a",
    },
    hotel: {
      $oid: "64e9bb668985b522199c254c",
    },
    serialNumber: "2",
    guestName: "ATANU DAS",
    checkInDate: {
      $date: "2023-10-10T07:53:22.270Z",
    },
    checkOutDate: {
      $date: "2023-10-22T00:00:00.000Z",
    },
    roomCategory: "Suite",
    numberOfRooms: 2,
    numberOfPersons: 4,
    bookingAmount: 14000,
    advanceAmount: 5000,
    dueAmount: 9000,
    advanceDate: {
      $date: "2023-08-26T00:00:00.000Z",
    },
    bookingSource: "Booking.com",
    bookingBy: "GOUTAM DUTTA",
    plan: "CP",
    contactNumber: "8989786745",
    remarks: "",
    addedBy: {
      $oid: "64e9bb9f8985b522199c255d",
    },
    status: "CONFIRMED",
    accountType: "Hotel",
    createdAt: {
      $date: "2023-10-10T07:53:22.270Z",
    },
    updatedAt: {
      $date: "2023-08-26T08:51:25.198Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "64ea42bab4dfface2256fa03",
    },
    hotel: {
      $oid: "64e9ad981a67cc970f211ef1",
    },
    serialNumber: "3",
    guestName: "SUBHAM",
    guestEmail: "tuhinbr99@gmail.com",
    checkInDate: {
      $date: "2023-08-27T00:00:00.000Z",
    },
    checkOutDate: {
      $date: "2023-09-01T00:00:00.000Z",
    },
    roomCategory: "Same",
    numberOfRooms: 4,
    numberOfPersons: 4,
    bookingAmount: 5000,
    advanceAmount: 3000,
    dueAmount: 2000,
    advanceDate: {
      $date: "2023-08-27T00:00:00.000Z",
    },
    bookingSource: "Booking.com",
    bookingBy: "admin01",
    plan: "CP",
    contactNumber: "9088776655",
    remarks: "",
    addedBy: {
      $oid: "64bed2dc2d3efdf8191de735",
    },
    status: "CANCELLED",
    accountType: "Hotel",
    createdAt: {
      $date: "2023-08-26T18:21:46.780Z",
    },
    updatedAt: {
      $date: "2023-08-27T17:06:59.135Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "64eaf66cb9a9d4040e50731e",
    },
    hotel: {
      $oid: "64e9b3511a67cc970f211f47",
    },
    serialNumber: "4",
    guestName: "MD. FAROOQUE",
    checkInDate: {
      $date: "2023-08-29T00:00:00.000Z",
    },
    checkOutDate: {
      $date: "2023-08-30T00:00:00.000Z",
    },
    roomCategory: "Deluxe Double Room with Balcony and Sea View",
    numberOfRooms: 1,
    numberOfPersons: 2,
    bookingAmount: 20000,
    advanceAmount: 3000,
    dueAmount: 17000,
    advanceDate: {
      $date: "2023-08-26T00:00:00.000Z",
    },
    bookingSource: "Agoda",
    bookingBy: "SUKANTA",
    plan: "CP",
    contactNumber: "7878787878",
    remarks: "OK",
    addedBy: {
      $oid: "64eaf3dcb9a9d4040e5072b0",
    },
    status: "CANCELLED",
    accountType: "Sayngo",
    createdAt: {
      $date: "2023-10-10T07:53:22.270Z",
    },
    updatedAt: {
      $date: "2023-08-27T17:09:19.902Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "64eaf701b9a9d4040e507325",
    },
    hotel: {
      $oid: "64eaf4aab9a9d4040e5072d5",
    },
    serialNumber: "5",
    guestName: "SUPRATIK SINHA ROY",
    checkInDate: {
      $date: "2023-09-01T00:00:00.000Z",
    },
    checkOutDate: {
      $date: "2023-09-02T00:00:00.000Z",
    },
    roomCategory: "Deluxe",
    numberOfRooms: 3,
    numberOfPersons: 6,
    bookingAmount: 50000,
    advanceAmount: 10000,
    dueAmount: 40000,
    advanceDate: {
      $date: "2023-08-25T00:00:00.000Z",
    },
    bookingSource: "Booking.com",
    bookingBy: "SUKANTA",
    plan: "CP",
    contactNumber: "5656565656",
    remarks: "",
    addedBy: {
      $oid: "64eaf3dcb9a9d4040e5072b0",
    },
    status: "CONFIRMED",
    accountType: "Hotel",
    createdAt: {
      $date: "2023-08-27T07:10:57.862Z",
    },
    updatedAt: {
      $date: "2023-08-27T07:10:57.862Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "64eb04fd283d830b8e85f1b9",
    },
    hotel: {
      $oid: "64e9b3511a67cc970f211f47",
    },
    serialNumber: "6",
    guestName: "QAMAR ABDULLAH",
    checkInDate: {
      $date: "2023-09-14T00:00:00.000Z",
    },
    checkOutDate: {
      $date: "2023-09-15T00:00:00.000Z",
    },
    roomCategory: "Luxury Triple Room",
    numberOfRooms: 2,
    numberOfPersons: 6,
    bookingAmount: 7000,
    advanceAmount: 5000,
    dueAmount: 2000,
    advanceDate: {
      $date: "2023-08-27T00:00:00.000Z",
    },
    bookingSource: "Booking.com",
    bookingBy: "SANCHITA",
    plan: "CP",
    contactNumber: "6767676767",
    remarks: "",
    addedBy: {
      $oid: "64eaf435b9a9d4040e5072c6",
    },
    status: "CONFIRMED",
    accountType: "Hotel",
    createdAt: {
      $date: "2023-08-27T08:10:37.159Z",
    },
    updatedAt: {
      $date: "2023-08-27T08:10:37.159Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "64eb0a0d283d830b8e85f32d",
    },
    hotel: {
      $oid: "64e9b3511a67cc970f211f47",
    },
    serialNumber: "7",
    guestName: "KALYAN DUTTA",
    checkInDate: {
      $date: "2023-08-28T00:00:00.000Z",
    },
    checkOutDate: {
      $date: "2023-08-29T00:00:00.000Z",
    },
    roomCategory: "Deluxe Double Room with Balcony",
    numberOfRooms: 1,
    numberOfPersons: 2,
    bookingAmount: 1500,
    advanceAmount: 500,
    dueAmount: 1000,
    advanceDate: {
      $date: "2023-08-25T00:00:00.000Z",
    },
    bookingSource: "Booking.com",
    bookingBy: "RIMA",
    plan: "EP",
    contactNumber: "7001576985",
    remarks: "OK",
    addedBy: {
      $oid: "64eb03b6283d830b8e85f1a0",
    },
    status: "CANCELLED",
    accountType: "Sayngo",
    createdAt: {
      $date: "2023-08-27T08:32:13.272Z",
    },
    updatedAt: {
      $date: "2023-08-27T17:10:17.864Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "64eb0a32283d830b8e85f338",
    },
    hotel: {
      $oid: "64e9b3511a67cc970f211f47",
    },
    serialNumber: "8",
    guestName: "POULAMI GHOSH",
    checkInDate: {
      $date: "2023-09-01T00:00:00.000Z",
    },
    checkOutDate: {
      $date: "2023-09-03T00:00:00.000Z",
    },
    roomCategory: "Deluxe Double Room with Balcony",
    numberOfRooms: 1,
    numberOfPersons: 2,
    bookingAmount: 5241,
    advanceAmount: 1500,
    dueAmount: 3741,
    advanceDate: {
      $date: "2023-08-27T00:00:00.000Z",
    },
    bookingSource: "Booking.com",
    bookingBy: "SANCHITA",
    plan: "CP",
    contactNumber: "7003223075",
    remarks: "PAYMENT DONE",
    addedBy: {
      $oid: "64eaf435b9a9d4040e5072c6",
    },
    status: "CONFIRMED",
    accountType: "Sayngo",
    createdAt: {
      $date: "2023-08-27T08:32:50.092Z",
    },
    updatedAt: {
      $date: "2023-08-27T08:32:50.092Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "64eb0a5a283d830b8e85f33f",
    },
    hotel: {
      $oid: "64e9b3511a67cc970f211f47",
    },
    serialNumber: "9",
    guestName: "IQBAL AKRAM",
    checkInDate: {
      $date: "2023-08-27T00:00:00.000Z",
    },
    checkOutDate: {
      $date: "2023-08-30T00:00:00.000Z",
    },
    roomCategory: "Deluxe Double Room with Balcony",
    numberOfRooms: 2,
    numberOfPersons: 4,
    bookingAmount: 3000,
    advanceAmount: 1000,
    dueAmount: 2000,
    advanceDate: {
      $date: "2023-08-26T00:00:00.000Z",
    },
    bookingSource: "Booking.com",
    bookingBy: "RIMA",
    plan: "EP",
    contactNumber: "9678653468",
    remarks: "OK",
    addedBy: {
      $oid: "64eb03b6283d830b8e85f1a0",
    },
    status: "CONFIRMED",
    accountType: "Sayngo",
    createdAt: {
      $date: "2023-08-27T08:33:30.477Z",
    },
    updatedAt: {
      $date: "2023-08-27T08:33:30.477Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "64eb0ab9283d830b8e85f346",
    },
    hotel: {
      $oid: "64e9b3511a67cc970f211f47",
    },
    serialNumber: "10",
    guestName: "SUBHASIS GURAY",
    checkInDate: {
      $date: "2023-08-29T00:00:00.000Z",
    },
    checkOutDate: {
      $date: "2023-08-31T00:00:00.000Z",
    },
    roomCategory: "Standard Double Room",
    numberOfRooms: 1,
    numberOfPersons: 2,
    bookingAmount: 2000,
    advanceAmount: 500,
    dueAmount: 1500,
    advanceDate: {
      $date: "2023-08-18T00:00:00.000Z",
    },
    bookingSource: "Agoda",
    bookingBy: "RIMA",
    plan: "EP",
    contactNumber: "9456787654",
    remarks: "OK",
    addedBy: {
      $oid: "64eb03b6283d830b8e85f1a0",
    },
    status: "CONFIRMED",
    accountType: "Sayngo",
    createdAt: {
      $date: "2023-08-27T08:35:05.859Z",
    },
    updatedAt: {
      $date: "2023-08-27T08:35:05.859Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "64eb0aec283d830b8e85f34d",
    },
    hotel: {
      $oid: "64e9b3511a67cc970f211f47",
    },
    serialNumber: "11",
    guestName: "INDRAJIT SHAH",
    checkInDate: {
      $date: "2023-09-02T00:00:00.000Z",
    },
    checkOutDate: {
      $date: "2023-09-03T00:00:00.000Z",
    },
    roomCategory: "Deluxe Double Room with Balcony",
    numberOfRooms: 2,
    numberOfPersons: 4,
    bookingAmount: 5443,
    advanceAmount: 1500,
    dueAmount: 3943,
    advanceDate: {
      $date: "2023-08-26T00:00:00.000Z",
    },
    bookingSource: "Booking.com",
    bookingBy: "SANCHITA",
    plan: "CP",
    contactNumber: "8017850391",
    remarks: "PAYMENT DONE",
    addedBy: {
      $oid: "64eaf435b9a9d4040e5072c6",
    },
    status: "CONFIRMED",
    accountType: "Sayngo",
    createdAt: {
      $date: "2023-08-27T08:35:56.622Z",
    },
    updatedAt: {
      $date: "2023-08-27T08:35:56.622Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "64eb0afe283d830b8e85f354",
    },
    hotel: {
      $oid: "64eaf53ab9a9d4040e5072dc",
    },
    serialNumber: "12",
    guestName: "SUBHAJIT DAS",
    checkInDate: {
      $date: "2023-09-01T00:00:00.000Z",
    },
    checkOutDate: {
      $date: "2023-09-03T00:00:00.000Z",
    },
    roomCategory: "Family",
    numberOfRooms: 1,
    numberOfPersons: 4,
    bookingAmount: 6451,
    advanceAmount: 2000,
    dueAmount: 4451,
    advanceDate: {
      $date: "2023-08-27T00:00:00.000Z",
    },
    bookingSource: "Booking.com",
    bookingBy: "DILIP JANA",
    plan: "EP",
    contactNumber: "9732286660",
    remarks: "DONE",
    addedBy: {
      $oid: "64eaf409b9a9d4040e5072bb",
    },
    status: "CONFIRMED",
    accountType: "Hotel",
    createdAt: {
      $date: "2023-08-27T08:36:14.630Z",
    },
    updatedAt: {
      $date: "2023-08-27T08:36:14.630Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "64eb0b18283d830b8e85f35b",
    },
    hotel: {
      $oid: "64e9b3511a67cc970f211f47",
    },
    serialNumber: "13",
    guestName: "KALYAN DAS",
    checkInDate: {
      $date: "2023-08-30T00:00:00.000Z",
    },
    checkOutDate: {
      $date: "2023-08-31T00:00:00.000Z",
    },
    roomCategory: "Family Suite",
    numberOfRooms: 1,
    numberOfPersons: 6,
    bookingAmount: 5000,
    advanceAmount: 2000,
    dueAmount: 3000,
    advanceDate: {
      $date: "2023-08-23T00:00:00.000Z",
    },
    bookingSource: "Agoda",
    bookingBy: "RIMA",
    plan: "EP",
    contactNumber: "9845763456",
    remarks: "OK",
    addedBy: {
      $oid: "64eb03b6283d830b8e85f1a0",
    },
    status: "CONFIRMED",
    accountType: "Sayngo",
    createdAt: {
      $date: "2023-08-27T08:36:40.902Z",
    },
    updatedAt: {
      $date: "2023-08-27T08:36:40.902Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "64eb0b55283d830b8e85f362",
    },
    hotel: {
      $oid: "64e9b3511a67cc970f211f47",
    },
    serialNumber: "14",
    guestName: "MUNSHI SALIM JAVED",
    checkInDate: {
      $date: "2023-09-05T00:00:00.000Z",
    },
    checkOutDate: {
      $date: "2023-09-07T00:00:00.000Z",
    },
    roomCategory: "Deluxe Double Room with Balcony and Sea View",
    numberOfRooms: 1,
    numberOfPersons: 2,
    bookingAmount: 5600,
    advanceAmount: 3000,
    dueAmount: 2600,
    advanceDate: {
      $date: "2023-08-26T00:00:00.000Z",
    },
    bookingSource: "Agoda",
    bookingBy: "SANCHITA",
    plan: "CP",
    contactNumber: "7908047173",
    remarks: "PAYMENT DONE",
    addedBy: {
      $oid: "64eaf435b9a9d4040e5072c6",
    },
    status: "CONFIRMED",
    accountType: "Sayngo",
    createdAt: {
      $date: "2023-08-27T08:37:41.670Z",
    },
    updatedAt: {
      $date: "2023-08-27T08:37:41.670Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "64eb0b86283d830b8e85f369",
    },
    hotel: {
      $oid: "64e9b3511a67cc970f211f47",
    },
    serialNumber: "15",
    guestName: "SOMA JANA",
    checkInDate: {
      $date: "2023-09-01T00:00:00.000Z",
    },
    checkOutDate: {
      $date: "2023-09-03T00:00:00.000Z",
    },
    roomCategory: "Standard Double Room",
    numberOfRooms: 2,
    numberOfPersons: 4,
    bookingAmount: 7032,
    advanceAmount: 2000,
    dueAmount: 5032,
    advanceDate: {
      $date: "2023-08-30T00:00:00.000Z",
    },
    bookingSource: "Sayngo",
    bookingBy: "RIMA",
    plan: "EP",
    contactNumber: "9734678777",
    remarks: "OK",
    addedBy: {
      $oid: "64eb03b6283d830b8e85f1a0",
    },
    status: "CONFIRMED",
    accountType: "Sayngo",
    createdAt: {
      $date: "2023-08-27T08:38:30.016Z",
    },
    updatedAt: {
      $date: "2023-08-27T08:38:30.016Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "64eb0bc4283d830b8e85f370",
    },
    hotel: {
      $oid: "64e9b3511a67cc970f211f47",
    },
    serialNumber: "16",
    guestName: "NIHAR PANDA",
    checkInDate: {
      $date: "2023-09-09T00:00:00.000Z",
    },
    checkOutDate: {
      $date: "2023-09-11T00:00:00.000Z",
    },
    roomCategory: "Deluxe Double Room with Balcony and Sea View",
    numberOfRooms: 1,
    numberOfPersons: 2,
    bookingAmount: 6160,
    advanceAmount: 2000,
    dueAmount: 4160,
    advanceDate: {
      $date: "2023-08-26T00:00:00.000Z",
    },
    bookingSource: "Agoda",
    bookingBy: "SANCHITA",
    plan: "CP",
    contactNumber: "7980236134",
    remarks: "PAYMENT DONE",
    addedBy: {
      $oid: "64eaf435b9a9d4040e5072c6",
    },
    status: "CONFIRMED",
    accountType: "Sayngo",
    createdAt: {
      $date: "2023-08-27T08:39:32.124Z",
    },
    updatedAt: {
      $date: "2023-08-27T08:39:32.124Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "64eb0bf0283d830b8e85f377",
    },
    hotel: {
      $oid: "64eaf53ab9a9d4040e5072dc",
    },
    serialNumber: "17",
    guestName: "PIYALI CHOWDHURY",
    checkInDate: {
      $date: "2023-09-23T00:00:00.000Z",
    },
    checkOutDate: {
      $date: "2023-09-25T00:00:00.000Z",
    },
    roomCategory: "Family",
    numberOfRooms: 2,
    numberOfPersons: 8,
    bookingAmount: 12902,
    advanceAmount: 6000,
    dueAmount: 6902,
    advanceDate: {
      $date: "2023-08-27T00:00:00.000Z",
    },
    bookingSource: "Booking.com",
    bookingBy: "DILIP JANA",
    plan: "EP",
    contactNumber: "6296092603",
    remarks: "OK",
    addedBy: {
      $oid: "64eaf409b9a9d4040e5072bb",
    },
    status: "CONFIRMED",
    accountType: "Hotel",
    createdAt: {
      $date: "2023-08-27T08:40:16.531Z",
    },
    updatedAt: {
      $date: "2023-08-27T08:40:16.531Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "64eb0c2d283d830b8e85f37e",
    },
    hotel: {
      $oid: "64e9b3511a67cc970f211f47",
    },
    serialNumber: "18",
    guestName: "SUBHASIS ROY",
    checkInDate: {
      $date: "2023-09-20T00:00:00.000Z",
    },
    checkOutDate: {
      $date: "2023-09-21T00:00:00.000Z",
    },
    roomCategory: "Standard Double Room",
    numberOfRooms: 2,
    numberOfPersons: 2,
    bookingAmount: 2000,
    advanceAmount: 1000,
    dueAmount: 1000,
    advanceDate: {
      $date: "2023-08-31T00:00:00.000Z",
    },
    bookingSource: "Sayngo",
    bookingBy: "RIMA",
    plan: "EP",
    contactNumber: "9775645342",
    remarks: "OK",
    addedBy: {
      $oid: "64eb03b6283d830b8e85f1a0",
    },
    status: "CONFIRMED",
    accountType: "Sayngo",
    createdAt: {
      $date: "2023-08-27T08:41:17.728Z",
    },
    updatedAt: {
      $date: "2023-08-27T08:41:17.728Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "64eb0c35283d830b8e85f385",
    },
    hotel: {
      $oid: "64e9b3511a67cc970f211f47",
    },
    serialNumber: "19",
    guestName: "PROMITH SAHA",
    checkInDate: {
      $date: "2023-09-23T00:00:00.000Z",
    },
    checkOutDate: {
      $date: "2023-09-24T00:00:00.000Z",
    },
    roomCategory: "Standard Double Room",
    numberOfRooms: 2,
    numberOfPersons: 5,
    bookingAmount: 4600,
    advanceAmount: 2000,
    dueAmount: 2600,
    advanceDate: {
      $date: "2023-08-26T00:00:00.000Z",
    },
    bookingSource: "Offline",
    bookingBy: "SANCHITA",
    plan: "CP",
    contactNumber: "7059845862",
    remarks: "PAYMENT DONE",
    addedBy: {
      $oid: "64eaf435b9a9d4040e5072c6",
    },
    status: "CONFIRMED",
    accountType: "Sayngo",
    createdAt: {
      $date: "2023-08-27T08:41:25.891Z",
    },
    updatedAt: {
      $date: "2023-08-27T08:41:25.891Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "64eb0ca4283d830b8e85f38c",
    },
    hotel: {
      $oid: "64e9b3511a67cc970f211f47",
    },
    serialNumber: "20",
    guestName: "AKANSHA CHAKRABORTY",
    checkInDate: {
      $date: "2023-09-28T00:00:00.000Z",
    },
    checkOutDate: {
      $date: "2023-10-01T00:00:00.000Z",
    },
    roomCategory: "Deluxe Double Room with Balcony and Sea View",
    numberOfRooms: 1,
    numberOfPersons: 2,
    bookingAmount: 8366,
    advanceAmount: 2000,
    dueAmount: 6366,
    advanceDate: {
      $date: "2023-08-26T00:00:00.000Z",
    },
    bookingSource: "Offline",
    bookingBy: "SANCHITA",
    plan: "CP",
    contactNumber: "7908307242",
    remarks: "OK",
    addedBy: {
      $oid: "64eaf435b9a9d4040e5072c6",
    },
    status: "CONFIRMED",
    accountType: "Sayngo",
    createdAt: {
      $date: "2023-08-27T08:43:16.355Z",
    },
    updatedAt: {
      $date: "2023-08-27T08:43:16.355Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "64eb0cda283d830b8e85f393",
    },
    hotel: {
      $oid: "64e9b3511a67cc970f211f47",
    },
    serialNumber: "21",
    guestName: "RAJ ROY",
    checkInDate: {
      $date: "2023-08-30T00:00:00.000Z",
    },
    checkOutDate: {
      $date: "2023-08-31T00:00:00.000Z",
    },
    roomCategory: "Family Suite",
    numberOfRooms: 2,
    numberOfPersons: 6,
    bookingAmount: 10000,
    advanceAmount: 3000,
    dueAmount: 7000,
    advanceDate: {
      $date: "2023-08-29T00:00:00.000Z",
    },
    bookingSource: "Yatra",
    bookingBy: "RIMA",
    plan: "EP",
    contactNumber: "8976543234",
    remarks: "OK",
    addedBy: {
      $oid: "64eb03b6283d830b8e85f1a0",
    },
    status: "CONFIRMED",
    accountType: "Hotel",
    createdAt: {
      $date: "2023-08-27T08:44:10.017Z",
    },
    updatedAt: {
      $date: "2023-08-27T08:44:10.017Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "64eb0d0a283d830b8e85f39a",
    },
    hotel: {
      $oid: "64e9b3511a67cc970f211f47",
    },
    serialNumber: "22",
    guestName: "SAPNA ARORA",
    checkInDate: {
      $date: "2023-08-27T00:00:00.000Z",
    },
    checkOutDate: {
      $date: "2023-08-28T00:00:00.000Z",
    },
    roomCategory: "Deluxe Double Room with Balcony",
    numberOfRooms: 1,
    numberOfPersons: 3,
    bookingAmount: 3200,
    advanceAmount: 1000,
    dueAmount: 2200,
    advanceDate: {
      $date: "2023-08-25T00:00:00.000Z",
    },
    bookingSource: "Sayngo",
    bookingBy: "SANCHITA",
    plan: "CP",
    contactNumber: "8910066326",
    remarks: "OK",
    addedBy: {
      $oid: "64eaf435b9a9d4040e5072c6",
    },
    status: "CONFIRMED",
    accountType: "Sayngo",
    createdAt: {
      $date: "2023-08-27T08:44:58.590Z",
    },
    updatedAt: {
      $date: "2023-08-27T08:44:58.590Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "64eb0d11283d830b8e85f3a1",
    },
    hotel: {
      $oid: "64eaf53ab9a9d4040e5072dc",
    },
    serialNumber: "23",
    guestName: "MANIK SARKAR",
    checkInDate: {
      $date: "2023-09-13T00:00:00.000Z",
    },
    checkOutDate: {
      $date: "2023-09-15T00:00:00.000Z",
    },
    roomCategory: "AC Deluxe",
    numberOfRooms: 1,
    numberOfPersons: 2,
    bookingAmount: 3326,
    advanceAmount: 3326,
    dueAmount: 0,
    advanceDate: {
      $date: "2023-08-28T00:00:00.000Z",
    },
    bookingSource: "Agoda",
    bookingBy: "DILIP JANA",
    plan: "EP",
    contactNumber: "9733396664",
    remarks: "OK",
    addedBy: {
      $oid: "64eaf409b9a9d4040e5072bb",
    },
    status: "CONFIRMED",
    accountType: "Sayngo",
    createdAt: {
      $date: "2023-08-27T08:45:05.290Z",
    },
    updatedAt: {
      $date: "2023-08-27T08:45:05.290Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "64eb0d36283d830b8e85f3a8",
    },
    hotel: {
      $oid: "64e9b3511a67cc970f211f47",
    },
    serialNumber: "24",
    guestName: "PRATIMA MAITY",
    checkInDate: {
      $date: "2023-09-28T00:00:00.000Z",
    },
    checkOutDate: {
      $date: "2023-10-01T00:00:00.000Z",
    },
    roomCategory: "Family Suite",
    numberOfRooms: 2,
    numberOfPersons: 1,
    bookingAmount: 12000,
    advanceAmount: 5000,
    dueAmount: 7000,
    advanceDate: {
      $date: "2023-09-01T00:00:00.000Z",
    },
    bookingSource: "Yatra",
    bookingBy: "RIMA",
    plan: "EP",
    contactNumber: "9823547657",
    remarks: "OK",
    addedBy: {
      $oid: "64eb03b6283d830b8e85f1a0",
    },
    status: "CONFIRMED",
    accountType: "Sayngo",
    createdAt: {
      $date: "2023-08-27T08:45:42.962Z",
    },
    updatedAt: {
      $date: "2023-08-27T08:45:42.962Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "64eb0d60283d830b8e85f3af",
    },
    hotel: {
      $oid: "64e9b3511a67cc970f211f47",
    },
    serialNumber: "25",
    guestName: "ARKAY KAPURIA",
    checkInDate: {
      $date: "2023-09-01T00:00:00.000Z",
    },
    checkOutDate: {
      $date: "2023-09-02T00:00:00.000Z",
    },
    roomCategory: "Family Suite",
    numberOfRooms: 1,
    numberOfPersons: 5,
    bookingAmount: 4000,
    advanceAmount: 2000,
    dueAmount: 2000,
    advanceDate: {
      $date: "2023-08-24T00:00:00.000Z",
    },
    bookingSource: "Sayngo",
    bookingBy: "SANCHITA",
    plan: "CP",
    contactNumber: "8013565851",
    remarks: "OK",
    addedBy: {
      $oid: "64eaf435b9a9d4040e5072c6",
    },
    status: "CONFIRMED",
    accountType: "Sayngo",
    createdAt: {
      $date: "2023-08-27T08:46:24.857Z",
    },
    updatedAt: {
      $date: "2023-08-27T08:46:24.857Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "64eb0db1283d830b8e85f3b6",
    },
    hotel: {
      $oid: "64e9b3511a67cc970f211f47",
    },
    serialNumber: "26",
    guestName: "MINTU JANA",
    checkInDate: {
      $date: "2023-08-29T00:00:00.000Z",
    },
    checkOutDate: {
      $date: "2023-08-31T00:00:00.000Z",
    },
    roomCategory: "Deluxe Double Room with Balcony",
    numberOfRooms: 1,
    numberOfPersons: 2,
    bookingAmount: 5000,
    advanceAmount: 5000,
    dueAmount: 0,
    advanceDate: {
      $date: "2023-08-27T00:00:00.000Z",
    },
    bookingSource: "Offline",
    bookingBy: "RIMA",
    plan: "EP",
    contactNumber: "7002330452",
    remarks: "OK",
    addedBy: {
      $oid: "64eb03b6283d830b8e85f1a0",
    },
    status: "CONFIRMED",
    accountType: "Sayngo",
    createdAt: {
      $date: "2023-08-27T08:47:45.859Z",
    },
    updatedAt: {
      $date: "2023-08-27T08:47:45.859Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "64eb0dcd283d830b8e85f3bd",
    },
    hotel: {
      $oid: "64eaf53ab9a9d4040e5072dc",
    },
    serialNumber: "27",
    guestName: "SUKOMAL DUTTA",
    checkInDate: {
      $date: "2023-09-14T00:00:00.000Z",
    },
    checkOutDate: {
      $date: "2023-09-16T00:00:00.000Z",
    },
    roomCategory: "AC Deluxe",
    numberOfRooms: 1,
    numberOfPersons: 2,
    bookingAmount: 3679,
    advanceAmount: 3679,
    dueAmount: 0,
    advanceDate: {
      $date: "2023-08-28T00:00:00.000Z",
    },
    bookingSource: "Agoda",
    bookingBy: "DILIP JANA",
    plan: "EP",
    contactNumber: "9733396664",
    remarks: "OK",
    addedBy: {
      $oid: "64eaf409b9a9d4040e5072bb",
    },
    status: "CONFIRMED",
    accountType: "Sayngo",
    createdAt: {
      $date: "2023-08-27T08:48:13.184Z",
    },
    updatedAt: {
      $date: "2023-08-27T08:48:13.184Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "64eb0e09283d830b8e85f3c4",
    },
    hotel: {
      $oid: "64e9b3511a67cc970f211f47",
    },
    serialNumber: "28",
    guestName: "PUSPITA MAITY",
    checkInDate: {
      $date: "2023-08-30T00:00:00.000Z",
    },
    checkOutDate: {
      $date: "2023-08-31T00:00:00.000Z",
    },
    roomCategory: "Deluxe Double Room with Balcony",
    numberOfRooms: 1,
    numberOfPersons: 2,
    bookingAmount: 3000,
    advanceAmount: 1000,
    dueAmount: 2000,
    advanceDate: {
      $date: "2023-08-17T00:00:00.000Z",
    },
    bookingSource: "Offline",
    bookingBy: "RIMA",
    plan: "EP",
    contactNumber: "9567876543",
    remarks: "OK",
    addedBy: {
      $oid: "64eb03b6283d830b8e85f1a0",
    },
    status: "CONFIRMED",
    accountType: "Hotel",
    createdAt: {
      $date: "2023-08-27T08:49:13.403Z",
    },
    updatedAt: {
      $date: "2023-08-27T08:49:13.403Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "64eb0e79283d830b8e85f3cb",
    },
    hotel: {
      $oid: "64e9ad981a67cc970f211ef1",
    },
    serialNumber: "29",
    guestName: "SUBHASIS JANA",
    checkInDate: {
      $date: "2023-08-28T00:00:00.000Z",
    },
    checkOutDate: {
      $date: "2023-08-29T00:00:00.000Z",
    },
    roomCategory: "Family",
    numberOfRooms: 4,
    numberOfPersons: 12,
    bookingAmount: 10000,
    advanceAmount: 3000,
    dueAmount: 7000,
    advanceDate: {
      $date: "2023-08-25T00:00:00.000Z",
    },
    bookingSource: "Booking.com",
    bookingBy: "RIMA",
    plan: "EP",
    contactNumber: "8945653456",
    remarks: "OK",
    addedBy: {
      $oid: "64eb03b6283d830b8e85f1a0",
    },
    status: "CONFIRMED",
    accountType: "Sayngo",
    createdAt: {
      $date: "2023-08-27T08:51:05.653Z",
    },
    updatedAt: {
      $date: "2023-08-27T08:51:05.653Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "64eb0e7a283d830b8e85f3d2",
    },
    hotel: {
      $oid: "64eaf53ab9a9d4040e5072dc",
    },
    serialNumber: "30",
    guestName: "AKASH DAS",
    checkInDate: {
      $date: "2023-09-22T00:00:00.000Z",
    },
    checkOutDate: {
      $date: "2023-09-24T00:00:00.000Z",
    },
    roomCategory: "AC Deluxe",
    numberOfRooms: 3,
    numberOfPersons: 6,
    bookingAmount: 12000,
    advanceAmount: 3500,
    dueAmount: 8500,
    advanceDate: {
      $date: "2023-08-27T00:00:00.000Z",
    },
    bookingSource: "Sayngo",
    bookingBy: "DILIP JANA",
    plan: "CP",
    contactNumber: "9732286660",
    remarks: "DONE",
    addedBy: {
      $oid: "64eaf409b9a9d4040e5072bb",
    },
    status: "CONFIRMED",
    accountType: "Hotel",
    createdAt: {
      $date: "2023-08-27T08:51:06.720Z",
    },
    updatedAt: {
      $date: "2023-08-27T08:51:06.720Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "64eb0f19283d830b8e85f3d9",
    },
    hotel: {
      $oid: "64e9ad981a67cc970f211ef1",
    },
    serialNumber: "31",
    guestName: "KALYAN TURI",
    checkInDate: {
      $date: "2023-09-08T00:00:00.000Z",
    },
    checkOutDate: {
      $date: "2023-09-10T00:00:00.000Z",
    },
    roomCategory: "Quadruple",
    numberOfRooms: 1,
    numberOfPersons: 2,
    bookingAmount: 4000,
    advanceAmount: 1000,
    dueAmount: 3000,
    advanceDate: {
      $date: "2023-08-22T00:00:00.000Z",
    },
    bookingSource: "Agoda",
    bookingBy: "RIMA",
    plan: "EP",
    contactNumber: "9856789867",
    remarks: "OK",
    addedBy: {
      $oid: "64eb03b6283d830b8e85f1a0",
    },
    status: "CONFIRMED",
    accountType: "Hotel",
    createdAt: {
      $date: "2023-08-27T08:53:45.666Z",
    },
    updatedAt: {
      $date: "2023-08-27T08:53:45.666Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "64eb0f34283d830b8e85f3e0",
    },
    hotel: {
      $oid: "64eaf53ab9a9d4040e5072dc",
    },
    serialNumber: "32",
    guestName: "PRITAM DAS",
    checkInDate: {
      $date: "2023-08-30T00:00:00.000Z",
    },
    checkOutDate: {
      $date: "2023-09-01T00:00:00.000Z",
    },
    roomCategory: "Family",
    numberOfRooms: 1,
    numberOfPersons: 4,
    bookingAmount: 3000,
    advanceAmount: 1500,
    dueAmount: 1500,
    advanceDate: {
      $date: "2023-08-27T00:00:00.000Z",
    },
    bookingSource: "Sayngo",
    bookingBy: "DILIP JANA",
    plan: "CP",
    contactNumber: "9832286660",
    remarks: "OK",
    addedBy: {
      $oid: "64eaf409b9a9d4040e5072bb",
    },
    status: "CONFIRMED",
    accountType: "Sayngo",
    createdAt: {
      $date: "2023-08-27T08:54:12.118Z",
    },
    updatedAt: {
      $date: "2023-08-27T08:54:12.118Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "64eb0f6b283d830b8e85f3e7",
    },
    hotel: {
      $oid: "64e9ad981a67cc970f211ef1",
    },
    serialNumber: "33",
    guestName: "AYAN BASU ",
    checkInDate: {
      $date: "2023-11-02T00:00:00.000Z",
    },
    checkOutDate: {
      $date: "2023-11-04T00:00:00.000Z",
    },
    roomCategory: "Deluxe",
    numberOfRooms: 1,
    numberOfPersons: 2,
    bookingAmount: 4000,
    advanceAmount: 1200,
    dueAmount: 2800,
    advanceDate: {
      $date: "2023-09-01T00:00:00.000Z",
    },
    bookingSource: "Booking.com",
    bookingBy: "RIMA",
    plan: "EP",
    contactNumber: "9834567898",
    remarks: "OK",
    addedBy: {
      $oid: "64eb03b6283d830b8e85f1a0",
    },
    status: "CONFIRMED",
    accountType: "Hotel",
    createdAt: {
      $date: "2023-08-27T08:55:07.363Z",
    },
    updatedAt: {
      $date: "2023-08-27T08:55:07.363Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "64eb0fb5283d830b8e85f401",
    },
    hotel: {
      $oid: "64e9ad981a67cc970f211ef1",
    },
    serialNumber: "34",
    guestName: "RIMI DAS",
    checkInDate: {
      $date: "2023-08-29T00:00:00.000Z",
    },
    checkOutDate: {
      $date: "2023-08-31T00:00:00.000Z",
    },
    roomCategory: "Deluxe",
    numberOfRooms: 1,
    numberOfPersons: 2,
    bookingAmount: 2000,
    advanceAmount: 1000,
    dueAmount: 1000,
    advanceDate: {
      $date: "2023-08-27T00:00:00.000Z",
    },
    bookingSource: "Yatra",
    bookingBy: "RIMA",
    plan: "EP",
    contactNumber: "6879487654",
    remarks: "OK",
    addedBy: {
      $oid: "64eb03b6283d830b8e85f1a0",
    },
    status: "CONFIRMED",
    accountType: "Sayngo",
    createdAt: {
      $date: "2023-08-27T08:56:21.751Z",
    },
    updatedAt: {
      $date: "2023-08-27T08:56:21.751Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "64eb100e283d830b8e85f408",
    },
    hotel: {
      $oid: "64eaf53ab9a9d4040e5072dc",
    },
    serialNumber: "35",
    guestName: "SK MAHAMMAD",
    checkInDate: {
      $date: "2023-10-14T00:00:00.000Z",
    },
    checkOutDate: {
      $date: "2023-10-15T00:00:00.000Z",
    },
    roomCategory: "Family",
    numberOfRooms: 1,
    numberOfPersons: 4,
    bookingAmount: 10000,
    advanceAmount: 5000,
    dueAmount: 5000,
    advanceDate: {
      $date: "2023-08-27T00:00:00.000Z",
    },
    bookingSource: "Cleartrip",
    bookingBy: "DILIP JANA",
    plan: "AP",
    contactNumber: "9733396664",
    remarks: "DONE",
    addedBy: {
      $oid: "64eaf409b9a9d4040e5072bb",
    },
    status: "CONFIRMED",
    accountType: "Hotel",
    createdAt: {
      $date: "2023-08-27T08:57:50.501Z",
    },
    updatedAt: {
      $date: "2023-08-27T08:57:50.501Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "64eb1013283d830b8e85f40f",
    },
    hotel: {
      $oid: "64e9b3511a67cc970f211f47",
    },
    serialNumber: "36",
    guestName: "ABHRATANU MANDAL",
    checkInDate: {
      $date: "2023-08-27T00:00:00.000Z",
    },
    checkOutDate: {
      $date: "2023-08-28T00:00:00.000Z",
    },
    roomCategory: "Deluxe Double Room with Balcony and Sea View",
    numberOfRooms: 2,
    numberOfPersons: 4,
    bookingAmount: 4536,
    advanceAmount: 3000,
    dueAmount: 1536,
    advanceDate: {
      $date: "2023-08-27T00:00:00.000Z",
    },
    bookingSource: "Cleartrip",
    bookingBy: "SANCHITA",
    plan: "CP",
    contactNumber: "7980735764",
    remarks: "OK",
    addedBy: {
      $oid: "64eaf435b9a9d4040e5072c6",
    },
    status: "CONFIRMED",
    accountType: "Sayngo",
    createdAt: {
      $date: "2023-08-27T08:57:55.643Z",
    },
    updatedAt: {
      $date: "2023-08-27T08:57:55.643Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "64eb1014283d830b8e85f416",
    },
    hotel: {
      $oid: "64e9ad981a67cc970f211ef1",
    },
    serialNumber: "37",
    guestName: "IQBAL AKRAM",
    checkInDate: {
      $date: "2023-08-28T00:00:00.000Z",
    },
    checkOutDate: {
      $date: "2023-08-29T00:00:00.000Z",
    },
    roomCategory: "Deluxe",
    numberOfRooms: 1,
    numberOfPersons: 2,
    bookingAmount: 2000,
    advanceAmount: 500,
    dueAmount: 1500,
    advanceDate: {
      $date: "2023-08-27T00:00:00.000Z",
    },
    bookingSource: "Yatra",
    bookingBy: "RIMA",
    plan: "EP",
    contactNumber: "9876543212",
    remarks: "OK",
    addedBy: {
      $oid: "64eb03b6283d830b8e85f1a0",
    },
    status: "CONFIRMED",
    accountType: "Hotel",
    createdAt: {
      $date: "2023-08-27T08:57:56.920Z",
    },
    updatedAt: {
      $date: "2023-08-27T08:57:56.920Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "64eb105f283d830b8e85f41d",
    },
    hotel: {
      $oid: "64e9ad981a67cc970f211ef1",
    },
    serialNumber: "38",
    guestName: "KALYAN DUTTA",
    checkInDate: {
      $date: "2023-08-28T00:00:00.000Z",
    },
    checkOutDate: {
      $date: "2023-08-30T00:00:00.000Z",
    },
    roomCategory: "Deluxe",
    numberOfRooms: 1,
    numberOfPersons: 2,
    bookingAmount: 2000,
    advanceAmount: 500,
    dueAmount: 1500,
    advanceDate: {
      $date: "2023-08-28T00:00:00.000Z",
    },
    bookingSource: "Yatra",
    bookingBy: "RIMA",
    plan: "EP",
    contactNumber: "8976789876",
    remarks: "OK",
    addedBy: {
      $oid: "64eb03b6283d830b8e85f1a0",
    },
    status: "CONFIRMED",
    accountType: "Sayngo",
    createdAt: {
      $date: "2023-08-27T08:59:11.755Z",
    },
    updatedAt: {
      $date: "2023-08-27T08:59:11.755Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "64eb108f283d830b8e85f424",
    },
    hotel: {
      $oid: "64e9b3511a67cc970f211f47",
    },
    serialNumber: "39",
    guestName: "MULLICK DALIA",
    checkInDate: {
      $date: "2023-09-02T00:00:00.000Z",
    },
    checkOutDate: {
      $date: "2023-09-03T00:00:00.000Z",
    },
    roomCategory: "Standard Double Room",
    numberOfRooms: 1,
    numberOfPersons: 2,
    bookingAmount: 2318,
    advanceAmount: 700,
    dueAmount: 1618,
    advanceDate: {
      $date: "2023-08-27T00:00:00.000Z",
    },
    bookingSource: "Cleartrip",
    bookingBy: "SANCHITA",
    plan: "CP",
    contactNumber: "9433824744",
    remarks: "OK",
    addedBy: {
      $oid: "64eaf435b9a9d4040e5072c6",
    },
    status: "CONFIRMED",
    accountType: "Sayngo",
    createdAt: {
      $date: "2023-08-27T08:59:59.557Z",
    },
    updatedAt: {
      $date: "2023-08-27T08:59:59.557Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "64eb10b7283d830b8e85f42b",
    },
    hotel: {
      $oid: "64e9ad981a67cc970f211ef1",
    },
    serialNumber: "40",
    guestName: "SOMA DAS",
    checkInDate: {
      $date: "2023-09-08T00:00:00.000Z",
    },
    checkOutDate: {
      $date: "2023-09-10T00:00:00.000Z",
    },
    roomCategory: "Deluxe",
    numberOfRooms: 2,
    numberOfPersons: 4,
    bookingAmount: 4000,
    advanceAmount: 2000,
    dueAmount: 2000,
    advanceDate: {
      $date: "2023-08-28T00:00:00.000Z",
    },
    bookingSource: "Offline",
    bookingBy: "RIMA",
    plan: "EP",
    contactNumber: "9878987654",
    remarks: "OK",
    addedBy: {
      $oid: "64eb03b6283d830b8e85f1a0",
    },
    status: "CONFIRMED",
    accountType: "Sayngo",
    createdAt: {
      $date: "2023-08-27T09:00:39.122Z",
    },
    updatedAt: {
      $date: "2023-08-27T09:00:39.122Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "64eb10e2283d830b8e85f432",
    },
    hotel: {
      $oid: "64eaf53ab9a9d4040e5072dc",
    },
    serialNumber: "41",
    guestName: "NIRMAL K SIL",
    checkInDate: {
      $date: "2023-08-28T00:00:00.000Z",
    },
    checkOutDate: {
      $date: "2023-08-30T00:00:00.000Z",
    },
    roomCategory: "AC Deluxe",
    numberOfRooms: 2,
    numberOfPersons: 4,
    bookingAmount: 18000,
    advanceAmount: 10000,
    dueAmount: 8000,
    advanceDate: {
      $date: "2023-08-27T00:00:00.000Z",
    },
    bookingSource: "Travel Agent",
    bookingBy: "DILIP JANA",
    plan: "MAP",
    contactNumber: "9733396664",
    remarks: "OK",
    addedBy: {
      $oid: "64eaf409b9a9d4040e5072bb",
    },
    status: "CONFIRMED",
    accountType: "Sayngo",
    createdAt: {
      $date: "2023-08-27T09:01:22.780Z",
    },
    updatedAt: {
      $date: "2023-08-27T09:01:22.780Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "64eb1105283d830b8e85f439",
    },
    hotel: {
      $oid: "64e9ad981a67cc970f211ef1",
    },
    serialNumber: "42",
    guestName: "MANIK PAYRA",
    checkInDate: {
      $date: "2023-09-29T00:00:00.000Z",
    },
    checkOutDate: {
      $date: "2023-10-01T00:00:00.000Z",
    },
    roomCategory: "Quadruple",
    numberOfRooms: 1,
    numberOfPersons: 2,
    bookingAmount: 5000,
    advanceAmount: 2000,
    dueAmount: 3000,
    advanceDate: {
      $date: "2023-08-31T00:00:00.000Z",
    },
    bookingSource: "Offline",
    bookingBy: "RIMA",
    plan: "EP",
    contactNumber: "9987898767",
    remarks: "OK",
    addedBy: {
      $oid: "64eb03b6283d830b8e85f1a0",
    },
    status: "CONFIRMED",
    accountType: "Hotel",
    createdAt: {
      $date: "2023-08-27T09:01:57.378Z",
    },
    updatedAt: {
      $date: "2023-08-27T09:01:57.378Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "64eb1124283d830b8e85f440",
    },
    hotel: {
      $oid: "64e9b3511a67cc970f211f47",
    },
    serialNumber: "43",
    guestName: "KINSHUK SARKAR",
    checkInDate: {
      $date: "2023-08-27T00:00:00.000Z",
    },
    checkOutDate: {
      $date: "2023-08-30T00:00:00.000Z",
    },
    roomCategory: "Deluxe Double Room with Balcony",
    numberOfRooms: 2,
    numberOfPersons: 5,
    bookingAmount: 7000,
    advanceAmount: 2000,
    dueAmount: 5000,
    advanceDate: {
      $date: "2023-08-25T00:00:00.000Z",
    },
    bookingSource: "Sayngo",
    bookingBy: "SANCHITA",
    plan: "CP",
    contactNumber: "6289026971",
    remarks: "OK",
    addedBy: {
      $oid: "64eaf435b9a9d4040e5072c6",
    },
    status: "CONFIRMED",
    accountType: "Sayngo",
    createdAt: {
      $date: "2023-08-27T09:02:28.749Z",
    },
    updatedAt: {
      $date: "2023-08-27T10:00:45.093Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "64eb1150283d830b8e85f447",
    },
    hotel: {
      $oid: "64e9ad981a67cc970f211ef1",
    },
    serialNumber: "44",
    guestName: "MOUMITA JANA",
    checkInDate: {
      $date: "2023-08-29T00:00:00.000Z",
    },
    checkOutDate: {
      $date: "2023-08-30T00:00:00.000Z",
    },
    roomCategory: "Deluxe",
    numberOfRooms: 1,
    numberOfPersons: 2,
    bookingAmount: 2000,
    advanceAmount: 500,
    dueAmount: 1500,
    advanceDate: {
      $date: "2023-08-27T00:00:00.000Z",
    },
    bookingSource: "Sayngo",
    bookingBy: "RIMA",
    plan: "EP",
    contactNumber: "9876567876",
    remarks: "OK",
    addedBy: {
      $oid: "64eb03b6283d830b8e85f1a0",
    },
    status: "CONFIRMED",
    accountType: "Hotel",
    createdAt: {
      $date: "2023-08-27T09:03:12.518Z",
    },
    updatedAt: {
      $date: "2023-08-27T09:03:12.518Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "64eb1173283d830b8e85f44e",
    },
    hotel: {
      $oid: "64e9b3511a67cc970f211f47",
    },
    serialNumber: "45",
    guestName: "PRATIK PAL",
    checkInDate: {
      $date: "2023-09-01T00:00:00.000Z",
    },
    checkOutDate: {
      $date: "2023-09-03T00:00:00.000Z",
    },
    roomCategory: "Deluxe Double Room with Balcony",
    numberOfRooms: 1,
    numberOfPersons: 2,
    bookingAmount: 5241,
    advanceAmount: 1500,
    dueAmount: 3741,
    advanceDate: {
      $date: "2023-08-24T00:00:00.000Z",
    },
    bookingSource: "Travel Agent",
    bookingBy: "SANCHITA",
    plan: "CP",
    contactNumber: "9433164050",
    remarks: "OK",
    addedBy: {
      $oid: "64eaf435b9a9d4040e5072c6",
    },
    status: "CONFIRMED",
    accountType: "Sayngo",
    createdAt: {
      $date: "2023-08-27T09:03:47.779Z",
    },
    updatedAt: {
      $date: "2023-08-27T09:03:47.779Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "64eb118f283d830b8e85f455",
    },
    hotel: {
      $oid: "64e9ad981a67cc970f211ef1",
    },
    serialNumber: "46",
    guestName: "SARA DAS",
    checkInDate: {
      $date: "2023-08-28T00:00:00.000Z",
    },
    checkOutDate: {
      $date: "2023-08-30T00:00:00.000Z",
    },
    roomCategory: "Quadruple",
    numberOfRooms: 1,
    numberOfPersons: 2,
    bookingAmount: 4000,
    advanceAmount: 1500,
    dueAmount: 2500,
    advanceDate: {
      $date: "2023-08-25T00:00:00.000Z",
    },
    bookingSource: "Sayngo",
    bookingBy: "RIMA",
    plan: "EP",
    contactNumber: "9878567654",
    remarks: "OK",
    addedBy: {
      $oid: "64eb03b6283d830b8e85f1a0",
    },
    status: "CONFIRMED",
    accountType: "Sayngo",
    createdAt: {
      $date: "2023-08-27T09:04:15.846Z",
    },
    updatedAt: {
      $date: "2023-08-27T09:04:15.846Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "64eb11d8283d830b8e85f46f",
    },
    hotel: {
      $oid: "64eaf53ab9a9d4040e5072dc",
    },
    serialNumber: "47",
    guestName: "AKASH DAS",
    checkInDate: {
      $date: "2023-09-22T00:00:00.000Z",
    },
    checkOutDate: {
      $date: "2023-09-24T00:00:00.000Z",
    },
    roomCategory: "Family",
    numberOfRooms: 3,
    numberOfPersons: 12,
    bookingAmount: 18000,
    advanceAmount: 5000,
    dueAmount: 13000,
    advanceDate: {
      $date: "2023-08-27T00:00:00.000Z",
    },
    bookingSource: "Via.com",
    bookingBy: "DILIP JANA",
    plan: "EP",
    contactNumber: "9732286660",
    remarks: "OK",
    addedBy: {
      $oid: "64eaf409b9a9d4040e5072bb",
    },
    status: "CONFIRMED",
    accountType: "Sayngo",
    createdAt: {
      $date: "2023-08-27T09:05:28.544Z",
    },
    updatedAt: {
      $date: "2023-10-10T09:05:28.544Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "64eb1324283d830b8e85f4aa",
    },
    hotel: {
      $oid: "64eaf53ab9a9d4040e5072dc",
    },
    serialNumber: "48",
    guestName: "ACHINTA MONDAL",
    checkInDate: {
      $date: "2023-10-02T00:00:00.000Z",
    },
    checkOutDate: {
      $date: "2023-10-04T00:00:00.000Z",
    },
    roomCategory: "Standard",
    numberOfRooms: 1,
    numberOfPersons: 2,
    bookingAmount: 2800,
    advanceAmount: 2800,
    dueAmount: 0,
    advanceDate: {
      $date: "2023-08-27T00:00:00.000Z",
    },
    bookingSource: "Yatra",
    bookingBy: "DILIP JANA",
    plan: "CP",
    contactNumber: "9732286660",
    remarks: "DONE",
    addedBy: {
      $oid: "64eaf409b9a9d4040e5072bb",
    },
    status: "CONFIRMED",
    accountType: "Hotel",
    createdAt: {
      $date: "2023-08-27T09:11:00.959Z",
    },
    updatedAt: {
      $date: "2023-10-10T09:11:00.959Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "64eb1483283d830b8e85f4d7",
    },
    hotel: {
      $oid: "64e9b1bf1a67cc970f211f40",
    },
    serialNumber: "49",
    guestName: "ARYAAN PARWEZ",
    checkInDate: {
      $date: "2023-09-08T00:00:00.000Z",
    },
    checkOutDate: {
      $date: "2023-09-10T00:00:00.000Z",
    },
    roomCategory: "Platinum Room",
    numberOfRooms: 1,
    numberOfPersons: 2,
    bookingAmount: 7000,
    advanceAmount: 3000,
    dueAmount: 4000,
    advanceDate: {
      $date: "2023-08-28T00:00:00.000Z",
    },
    bookingSource: "Yatra",
    bookingBy: "SANCHITA",
    plan: "CP",
    contactNumber: "7003397277",
    remarks: "OK",
    addedBy: {
      $oid: "64eaf435b9a9d4040e5072c6",
    },
    status: "CONFIRMED",
    accountType: "Sayngo",
    createdAt: {
      $date: "2023-08-27T09:16:51.388Z",
    },
    updatedAt: {
      $date: "2023-10-10T09:16:51.388Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "64eb14e1283d830b8e85f4de",
    },
    hotel: {
      $oid: "64e9b1bf1a67cc970f211f40",
    },
    serialNumber: "50",
    guestName: "JAO ANUTOSH MITTAL",
    checkInDate: {
      $date: "2023-08-27T00:00:00.000Z",
    },
    checkOutDate: {
      $date: "2023-08-29T00:00:00.000Z",
    },
    roomCategory: "Super Deluxe Room",
    numberOfRooms: 1,
    numberOfPersons: 2,
    bookingAmount: 12000,
    advanceAmount: 4000,
    dueAmount: 8000,
    advanceDate: {
      $date: "2023-08-22T00:00:00.000Z",
    },
    bookingSource: "Yatra",
    bookingBy: "SANCHITA",
    plan: "CP",
    contactNumber: "9339532563",
    remarks: "OK",
    addedBy: {
      $oid: "64eaf435b9a9d4040e5072c6",
    },
    status: "CONFIRMED",
    accountType: "Sayngo",
    createdAt: {
      $date: "2023-08-27T09:18:25.895Z",
    },
    updatedAt: {
      $date: "2023-10-10T09:18:25.895Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "64eb1564283d830b8e85f4e5",
    },
    hotel: {
      $oid: "64e9b1bf1a67cc970f211f40",
    },
    serialNumber: "51",
    guestName: "SUBRATA BOSE",
    checkInDate: {
      $date: "2023-08-30T00:00:00.000Z",
    },
    checkOutDate: {
      $date: "2023-09-01T00:00:00.000Z",
    },
    roomCategory: "Premium Room",
    numberOfRooms: 1,
    numberOfPersons: 2,
    bookingAmount: 15000,
    advanceAmount: 5000,
    dueAmount: 10000,
    advanceDate: {
      $date: "2023-08-27T00:00:00.000Z",
    },
    bookingSource: "Travel Agent",
    bookingBy: "SANCHITA",
    plan: "CP",
    contactNumber: "9866545670",
    remarks: "OK",
    addedBy: {
      $oid: "64eaf435b9a9d4040e5072c6",
    },
    status: "CONFIRMED",
    accountType: "Sayngo",
    createdAt: {
      $date: "2023-08-27T09:20:36.886Z",
    },
    updatedAt: {
      $date: "2023-08-27T09:20:36.886Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "64eb159e283d830b8e85f4ec",
    },
    hotel: {
      $oid: "64e9b1bf1a67cc970f211f40",
    },
    serialNumber: "52",
    guestName: "GOUTAM DUTTA",
    checkInDate: {
      $date: "2023-09-07T00:00:00.000Z",
    },
    checkOutDate: {
      $date: "2023-09-09T00:00:00.000Z",
    },
    roomCategory: "Platinum Room",
    numberOfRooms: 2,
    numberOfPersons: 4,
    bookingAmount: 20000,
    advanceAmount: 7000,
    dueAmount: 13000,
    advanceDate: {
      $date: "2023-08-31T00:00:00.000Z",
    },
    bookingSource: "Travel Agent",
    bookingBy: "SANCHITA",
    plan: "CP",
    contactNumber: "8765879432",
    remarks: "OK",
    addedBy: {
      $oid: "64eaf435b9a9d4040e5072c6",
    },
    status: "CONFIRMED",
    accountType: "Hotel",
    createdAt: {
      $date: "2023-08-27T09:21:34.638Z",
    },
    updatedAt: {
      $date: "2023-08-27T09:21:34.638Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "64eb15ed283d830b8e85f4f3",
    },
    hotel: {
      $oid: "64e9b1bf1a67cc970f211f40",
    },
    serialNumber: "53",
    guestName: "SUKANTA MAJUMDAR",
    checkInDate: {
      $date: "2023-09-06T00:00:00.000Z",
    },
    checkOutDate: {
      $date: "2023-09-08T00:00:00.000Z",
    },
    roomCategory: "Super Deluxe Room",
    numberOfRooms: 1,
    numberOfPersons: 2,
    bookingAmount: 8000,
    advanceAmount: 2500,
    dueAmount: 5500,
    advanceDate: {
      $date: "2023-08-31T00:00:00.000Z",
    },
    bookingSource: "Via.com",
    bookingBy: "SANCHITA",
    plan: "CP",
    contactNumber: "8765354632",
    remarks: "OK",
    addedBy: {
      $oid: "64eaf435b9a9d4040e5072c6",
    },
    status: "CONFIRMED",
    accountType: "Sayngo",
    createdAt: {
      $date: "2023-08-27T09:22:53.133Z",
    },
    updatedAt: {
      $date: "2023-08-27T09:22:53.133Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "64eb1625283d830b8e85f4fa",
    },
    hotel: {
      $oid: "64e9b1bf1a67cc970f211f40",
    },
    serialNumber: "54",
    guestName: "SUBHAM SAHOO",
    checkInDate: {
      $date: "2023-09-09T00:00:00.000Z",
    },
    checkOutDate: {
      $date: "2023-09-11T00:00:00.000Z",
    },
    roomCategory: "Premium Room",
    numberOfRooms: 1,
    numberOfPersons: 2,
    bookingAmount: 9000,
    advanceAmount: 3000,
    dueAmount: 6000,
    advanceDate: {
      $date: "2023-09-05T00:00:00.000Z",
    },
    bookingSource: "Via.com",
    bookingBy: "SANCHITA",
    plan: "CP",
    contactNumber: "7894672678",
    remarks: "OK",
    addedBy: {
      $oid: "64eaf435b9a9d4040e5072c6",
    },
    status: "CONFIRMED",
    accountType: "Sayngo",
    createdAt: {
      $date: "2023-08-27T09:23:49.423Z",
    },
    updatedAt: {
      $date: "2023-08-27T09:23:49.423Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "64eb168c283d830b8e85f501",
    },
    hotel: {
      $oid: "64e9b1bf1a67cc970f211f40",
    },
    serialNumber: "55",
    guestName: "DILIP JANA",
    checkInDate: {
      $date: "2023-09-04T00:00:00.000Z",
    },
    checkOutDate: {
      $date: "2023-10-05T00:00:00.000Z",
    },
    roomCategory: "Platinum Room",
    numberOfRooms: 1,
    numberOfPersons: 2,
    bookingAmount: 12000,
    advanceAmount: 4000,
    dueAmount: 8000,
    advanceDate: {
      $date: "2023-09-04T00:00:00.000Z",
    },
    bookingSource: "Yatra",
    bookingBy: "SANCHITA",
    plan: "CP",
    contactNumber: "6295640455",
    remarks: "OK",
    addedBy: {
      $oid: "64eaf435b9a9d4040e5072c6",
    },
    status: "CONFIRMED",
    accountType: "Sayngo",
    createdAt: {
      $date: "2023-08-27T09:25:32.548Z",
    },
    updatedAt: {
      $date: "2023-08-27T09:25:32.548Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "64eb16e4283d830b8e85f51b",
    },
    hotel: {
      $oid: "64e9b1bf1a67cc970f211f40",
    },
    serialNumber: "56",
    guestName: "LIMA JANA",
    checkInDate: {
      $date: "2023-09-09T00:00:00.000Z",
    },
    checkOutDate: {
      $date: "2023-09-11T00:00:00.000Z",
    },
    roomCategory: "Platinum Room",
    numberOfRooms: 2,
    numberOfPersons: 4,
    bookingAmount: 30000,
    advanceAmount: 8000,
    dueAmount: 22000,
    advanceDate: {
      $date: "2023-09-07T00:00:00.000Z",
    },
    bookingSource: "Yatra",
    bookingBy: "SANCHITA",
    plan: "CP",
    contactNumber: "8796386348",
    remarks: "OK",
    addedBy: {
      $oid: "64eaf435b9a9d4040e5072c6",
    },
    status: "CONFIRMED",
    accountType: "Sayngo",
    createdAt: {
      $date: "2023-08-27T09:27:00.880Z",
    },
    updatedAt: {
      $date: "2023-08-27T09:27:00.880Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "64eb16fc283d830b8e85f522",
    },
    hotel: {
      $oid: "64eaf4aab9a9d4040e5072d5",
    },
    serialNumber: "57",
    guestName: "RAVI BISWAS",
    checkInDate: {
      $date: "2023-10-25T00:00:00.000Z",
    },
    checkOutDate: {
      $date: "2023-10-27T00:00:00.000Z",
    },
    roomCategory: "Quadruple",
    numberOfRooms: 2,
    numberOfPersons: 4,
    bookingAmount: 5000,
    advanceAmount: 1000,
    dueAmount: 4000,
    advanceDate: {
      $date: "2023-09-09T00:00:00.000Z",
    },
    bookingSource: "Booking.com",
    bookingBy: "RIMA",
    plan: "EP",
    contactNumber: "9856789875",
    remarks: "OK",
    addedBy: {
      $oid: "64eb03b6283d830b8e85f1a0",
    },
    status: "CONFIRMED",
    accountType: "Hotel",
    createdAt: {
      $date: "2023-08-27T09:27:24.165Z",
    },
    updatedAt: {
      $date: "2023-08-27T09:27:24.165Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "64eb1743283d830b8e85f53c",
    },
    hotel: {
      $oid: "64eaf4aab9a9d4040e5072d5",
    },
    serialNumber: "58",
    guestName: "ASMITA BISWAS",
    checkInDate: {
      $date: "2023-09-09T00:00:00.000Z",
    },
    checkOutDate: {
      $date: "2023-09-10T00:00:00.000Z",
    },
    roomCategory: "Deluxe",
    numberOfRooms: 1,
    numberOfPersons: 2,
    bookingAmount: 2000,
    advanceAmount: 1000,
    dueAmount: 1000,
    advanceDate: {
      $date: "2023-08-28T00:00:00.000Z",
    },
    bookingSource: "Booking.com",
    bookingBy: "RIMA",
    plan: "EP",
    contactNumber: "9809878908",
    remarks: "OK",
    addedBy: {
      $oid: "64eb03b6283d830b8e85f1a0",
    },
    status: "CONFIRMED",
    accountType: "Hotel",
    createdAt: {
      $date: "2023-08-27T09:28:35.324Z",
    },
    updatedAt: {
      $date: "2023-08-27T09:28:35.324Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "64eb17ac283d830b8e85f543",
    },
    hotel: {
      $oid: "64e9ad981a67cc970f211ef1",
    },
    serialNumber: "59",
    guestName: "DEBADITA JANA",
    checkInDate: {
      $date: "2023-08-30T00:00:00.000Z",
    },
    checkOutDate: {
      $date: "2023-08-31T00:00:00.000Z",
    },
    roomCategory: "Deluxe",
    numberOfRooms: 1,
    numberOfPersons: 2,
    bookingAmount: 2000,
    advanceAmount: 2000,
    dueAmount: 0,
    advanceDate: {
      $date: "2023-08-15T00:00:00.000Z",
    },
    bookingSource: "Offline",
    bookingBy: "RIMA",
    plan: "EP",
    contactNumber: "9876567898",
    remarks: "OK",
    addedBy: {
      $oid: "64eb03b6283d830b8e85f1a0",
    },
    status: "CANCELLED",
    accountType: "Hotel",
    createdAt: {
      $date: "2023-08-27T09:30:20.614Z",
    },
    updatedAt: {
      $date: "2023-08-27T17:14:00.028Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "64eb17e1283d830b8e85f54a",
    },
    hotel: {
      $oid: "64eaf4aab9a9d4040e5072d5",
    },
    serialNumber: "60",
    guestName: "DEBASRITA JANA",
    checkInDate: {
      $date: "2023-08-30T00:00:00.000Z",
    },
    checkOutDate: {
      $date: "2023-08-31T00:00:00.000Z",
    },
    roomCategory: "Deluxe",
    numberOfRooms: 1,
    numberOfPersons: 2,
    bookingAmount: 2000,
    advanceAmount: 2000,
    dueAmount: 0,
    advanceDate: {
      $date: "2023-08-23T00:00:00.000Z",
    },
    bookingSource: "Offline",
    bookingBy: "RIMA",
    plan: "EP",
    contactNumber: "8798767898",
    remarks: "OK",
    addedBy: {
      $oid: "64eb03b6283d830b8e85f1a0",
    },
    status: "CANCELLED",
    accountType: "Sayngo",
    createdAt: {
      $date: "2023-08-27T09:31:13.637Z",
    },
    updatedAt: {
      $date: "2023-08-27T17:17:20.261Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "64eb182c283d830b8e85f551",
    },
    hotel: {
      $oid: "64eaf4aab9a9d4040e5072d5",
    },
    serialNumber: "61",
    guestName: "DURBA JANA",
    checkInDate: {
      $date: "2023-08-30T00:00:00.000Z",
    },
    checkOutDate: {
      $date: "2023-08-31T00:00:00.000Z",
    },
    roomCategory: "Deluxe",
    numberOfRooms: 1,
    numberOfPersons: 2,
    bookingAmount: 2000,
    advanceAmount: 2000,
    dueAmount: 0,
    advanceDate: {
      $date: "2023-08-17T00:00:00.000Z",
    },
    bookingSource: "Yatra",
    bookingBy: "RIMA",
    plan: "EP",
    contactNumber: "8765678987",
    remarks: "OK",
    addedBy: {
      $oid: "64eb03b6283d830b8e85f1a0",
    },
    status: "CANCELLED",
    accountType: "Sayngo",
    createdAt: {
      $date: "2023-08-27T09:32:28.801Z",
    },
    updatedAt: {
      $date: "2023-08-27T17:14:44.583Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "64eb187e283d830b8e85f558",
    },
    hotel: {
      $oid: "64eaf4aab9a9d4040e5072d5",
    },
    serialNumber: "62",
    guestName: "JOYEE ROY",
    checkInDate: {
      $date: "2023-08-30T00:00:00.000Z",
    },
    checkOutDate: {
      $date: "2023-08-31T00:00:00.000Z",
    },
    roomCategory: "Deluxe",
    numberOfRooms: 1,
    numberOfPersons: 2,
    bookingAmount: 2000,
    advanceAmount: 2000,
    dueAmount: 0,
    advanceDate: {
      $date: "2023-08-15T00:00:00.000Z",
    },
    bookingSource: "Yatra",
    bookingBy: "RIMA",
    plan: "EP",
    contactNumber: "9875678987",
    remarks: "OK",
    addedBy: {
      $oid: "64eb03b6283d830b8e85f1a0",
    },
    status: "CANCELLED",
    accountType: "Hotel",
    createdAt: {
      $date: "2023-08-27T09:33:50.981Z",
    },
    updatedAt: {
      $date: "2023-08-27T17:12:42.652Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "64eb18bd283d830b8e85f55f",
    },
    hotel: {
      $oid: "64eaf4aab9a9d4040e5072d5",
    },
    serialNumber: "63",
    guestName: "RAIMA SEN",
    checkInDate: {
      $date: "2023-08-30T00:00:00.000Z",
    },
    checkOutDate: {
      $date: "2023-08-31T00:00:00.000Z",
    },
    roomCategory: "Deluxe",
    numberOfRooms: 1,
    numberOfPersons: 2,
    bookingAmount: 2000,
    advanceAmount: 2000,
    dueAmount: 0,
    advanceDate: {
      $date: "2023-08-09T00:00:00.000Z",
    },
    bookingSource: "Yatra",
    bookingBy: "RIMA",
    plan: "EP",
    contactNumber: "9567834567",
    remarks: "OK",
    addedBy: {
      $oid: "64eb03b6283d830b8e85f1a0",
    },
    status: "CANCELLED",
    accountType: "Sayngo",
    createdAt: {
      $date: "2023-08-27T09:34:53.887Z",
    },
    updatedAt: {
      $date: "2023-08-27T17:15:44.938Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "64eb1917283d830b8e85f566",
    },
    hotel: {
      $oid: "64eaf4aab9a9d4040e5072d5",
    },
    serialNumber: "64",
    guestName: "PAYEL SEET",
    checkInDate: {
      $date: "2023-08-30T00:00:00.000Z",
    },
    checkOutDate: {
      $date: "2023-08-31T00:00:00.000Z",
    },
    roomCategory: "Deluxe",
    numberOfRooms: 1,
    numberOfPersons: 2,
    bookingAmount: 2000,
    advanceAmount: 2000,
    dueAmount: 0,
    advanceDate: {
      $date: "2023-08-09T00:00:00.000Z",
    },
    bookingSource: "Agoda",
    bookingBy: "RIMA",
    plan: "EP",
    contactNumber: "9456345768",
    remarks: "OK",
    addedBy: {
      $oid: "64eb03b6283d830b8e85f1a0",
    },
    status: "CANCELLED",
    accountType: "Hotel",
    createdAt: {
      $date: "2023-08-27T09:36:23.096Z",
    },
    updatedAt: {
      $date: "2023-08-27T17:22:56.960Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "64eb1960283d830b8e85f56d",
    },
    hotel: {
      $oid: "64eaf4aab9a9d4040e5072d5",
    },
    serialNumber: "65",
    guestName: "IQBAL AKRAM",
    checkInDate: {
      $date: "2023-08-30T00:00:00.000Z",
    },
    checkOutDate: {
      $date: "2023-09-01T00:00:00.000Z",
    },
    roomCategory: "Family. Suite",
    numberOfRooms: 2,
    numberOfPersons: 10,
    bookingAmount: 10000,
    advanceAmount: 2000,
    dueAmount: 8000,
    advanceDate: {
      $date: "2023-08-23T00:00:00.000Z",
    },
    bookingSource: "Agoda",
    bookingBy: "RIMA",
    plan: "EP",
    contactNumber: "9878987987",
    remarks: "OK",
    addedBy: {
      $oid: "64eb03b6283d830b8e85f1a0",
    },
    status: "CANCELLED",
    accountType: "Sayngo",
    createdAt: {
      $date: "2023-08-27T09:37:36.878Z",
    },
    updatedAt: {
      $date: "2023-08-27T17:23:07.423Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "64eb19ad283d830b8e85f587",
    },
    hotel: {
      $oid: "64eaf4aab9a9d4040e5072d5",
    },
    serialNumber: "66",
    guestName: "KALYAN  MANNA",
    checkInDate: {
      $date: "2023-09-06T00:00:00.000Z",
    },
    checkOutDate: {
      $date: "2023-09-07T00:00:00.000Z",
    },
    roomCategory: "Quadruple",
    numberOfRooms: 1,
    numberOfPersons: 2,
    bookingAmount: 4000,
    advanceAmount: 3000,
    dueAmount: 1000,
    advanceDate: {
      $date: "2023-08-28T00:00:00.000Z",
    },
    bookingSource: "Sayngo",
    bookingBy: "RIMA",
    plan: "EP",
    contactNumber: "9834762345",
    remarks: "OK",
    addedBy: {
      $oid: "64eb03b6283d830b8e85f1a0",
    },
    status: "CANCELLED",
    accountType: "Sayngo",
    createdAt: {
      $date: "2023-08-27T09:38:53.400Z",
    },
    updatedAt: {
      $date: "2023-08-27T17:23:41.553Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "64eb1a04283d830b8e85f58e",
    },
    hotel: {
      $oid: "64e9bb668985b522199c254c",
    },
    serialNumber: "67",
    guestName: "AKASH DAS",
    checkInDate: {
      $date: "2023-08-28T00:00:00.000Z",
    },
    checkOutDate: {
      $date: "2023-08-30T00:00:00.000Z",
    },
    roomCategory: "Suite",
    numberOfRooms: 1,
    numberOfPersons: 4,
    bookingAmount: 12000,
    advanceAmount: 5000,
    dueAmount: 7000,
    advanceDate: {
      $date: "2023-08-27T00:00:00.000Z",
    },
    bookingSource: "Booking.com",
    bookingBy: "DILIP JANA",
    plan: "AP",
    contactNumber: "9732286660",
    remarks: "DONE",
    addedBy: {
      $oid: "64eaf409b9a9d4040e5072bb",
    },
    status: "CANCELLED",
    accountType: "Sayngo",
    createdAt: {
      $date: "2023-08-27T09:40:20.099Z",
    },
    updatedAt: {
      $date: "2023-10-04T18:48:26.581Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "64eb1a05283d830b8e85f595",
    },
    hotel: {
      $oid: "64eaf4aab9a9d4040e5072d5",
    },
    serialNumber: "68",
    guestName: "MISTI JANA",
    checkInDate: {
      $date: "2023-08-29T00:00:00.000Z",
    },
    checkOutDate: {
      $date: "2023-08-31T00:00:00.000Z",
    },
    roomCategory: "Deluxe",
    numberOfRooms: 1,
    numberOfPersons: 3,
    bookingAmount: 2000,
    advanceAmount: 1000,
    dueAmount: 1000,
    advanceDate: {
      $date: "2023-08-09T00:00:00.000Z",
    },
    bookingSource: "Yatra",
    bookingBy: "RIMA",
    plan: "EP",
    contactNumber: "9678345676",
    remarks: "OK",
    addedBy: {
      $oid: "64eb03b6283d830b8e85f1a0",
    },
    status: "CONFIRMED",
    accountType: "Sayngo",
    createdAt: {
      $date: "2023-08-27T09:40:21.977Z",
    },
    updatedAt: {
      $date: "2023-08-27T09:40:21.977Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "64eb1a60283d830b8e85f59c",
    },
    hotel: {
      $oid: "64eaf4aab9a9d4040e5072d5",
    },
    serialNumber: "69",
    guestName: "RAI ROY",
    checkInDate: {
      $date: "2023-09-28T00:00:00.000Z",
    },
    checkOutDate: {
      $date: "2023-09-30T00:00:00.000Z",
    },
    roomCategory: "Deluxe",
    numberOfRooms: 1,
    numberOfPersons: 2,
    bookingAmount: 2000,
    advanceAmount: 2000,
    dueAmount: 0,
    advanceDate: {
      $date: "2023-08-09T00:00:00.000Z",
    },
    bookingSource: "Offline",
    bookingBy: "RIMA",
    plan: "EP",
    contactNumber: "9780984567",
    remarks: "OK",
    addedBy: {
      $oid: "64eb03b6283d830b8e85f1a0",
    },
    status: "CONFIRMED",
    accountType: "Sayngo",
    createdAt: {
      $date: "2023-08-27T09:41:52.133Z",
    },
    updatedAt: {
      $date: "2023-08-27T09:41:52.133Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "64eb1ab9283d830b8e85f5a3",
    },
    hotel: {
      $oid: "64e9bb668985b522199c254c",
    },
    serialNumber: "70",
    guestName: "SUBHANKAR DAS",
    checkInDate: {
      $date: "2023-09-02T00:00:00.000Z",
    },
    checkOutDate: {
      $date: "2023-09-04T00:00:00.000Z",
    },
    roomCategory: "Executive Triple",
    numberOfRooms: 2,
    numberOfPersons: 6,
    bookingAmount: 18000,
    advanceAmount: 6000,
    dueAmount: 12000,
    advanceDate: {
      $date: "2023-08-27T00:00:00.000Z",
    },
    bookingSource: "Booking.com",
    bookingBy: "DILIP JANA",
    plan: "CP",
    contactNumber: "9733396664",
    remarks: "OK",
    addedBy: {
      $oid: "64eaf409b9a9d4040e5072bb",
    },
    status: "CONFIRMED",
    accountType: "Sayngo",
    createdAt: {
      $date: "2023-08-27T09:43:21.636Z",
    },
    updatedAt: {
      $date: "2023-08-27T09:43:21.636Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "64eb1b86283d830b8e85f5aa",
    },
    hotel: {
      $oid: "64e9bb668985b522199c254c",
    },
    serialNumber: "71",
    guestName: "ANIL DAS",
    checkInDate: {
      $date: "2023-09-14T00:00:00.000Z",
    },
    checkOutDate: {
      $date: "2023-09-17T00:00:00.000Z",
    },
    roomCategory: "Superior Family",
    numberOfRooms: 1,
    numberOfPersons: 4,
    bookingAmount: 13000,
    advanceAmount: 13000,
    dueAmount: 0,
    advanceDate: {
      $date: "2023-08-27T00:00:00.000Z",
    },
    bookingSource: "Agoda",
    bookingBy: "DILIP JANA",
    plan: "CP",
    contactNumber: "9733396664",
    remarks: "OK",
    addedBy: {
      $oid: "64eaf409b9a9d4040e5072bb",
    },
    status: "CONFIRMED",
    accountType: "Hotel",
    createdAt: {
      $date: "2023-08-27T09:46:46.100Z",
    },
    updatedAt: {
      $date: "2023-08-27T09:46:46.100Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "64eb1c12283d830b8e85f5b1",
    },
    hotel: {
      $oid: "64e9bb668985b522199c254c",
    },
    serialNumber: "72",
    guestName: "BABLU JANA",
    checkInDate: {
      $date: "2023-09-25T00:00:00.000Z",
    },
    checkOutDate: {
      $date: "2023-09-27T00:00:00.000Z",
    },
    roomCategory: "Junior Suite",
    numberOfRooms: 1,
    numberOfPersons: 2,
    bookingAmount: 5000,
    advanceAmount: 2500,
    dueAmount: 2500,
    advanceDate: {
      $date: "2023-08-27T00:00:00.000Z",
    },
    bookingSource: "Sayngo",
    bookingBy: "DILIP JANA",
    plan: "CP",
    contactNumber: "9732286660",
    remarks: "DONE",
    addedBy: {
      $oid: "64eaf409b9a9d4040e5072bb",
    },
    status: "CONFIRMED",
    accountType: "Hotel",
    createdAt: {
      $date: "2023-08-27T09:49:06.777Z",
    },
    updatedAt: {
      $date: "2023-08-27T09:49:06.777Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "64eb1d6c283d830b8e85f5b8",
    },
    hotel: {
      $oid: "64e9bb668985b522199c254c",
    },
    serialNumber: "73",
    guestName: "MALATI NAYAK",
    checkInDate: {
      $date: "2023-10-22T00:00:00.000Z",
    },
    checkOutDate: {
      $date: "2023-10-24T00:00:00.000Z",
    },
    roomCategory: "Presidential Suite",
    numberOfRooms: 1,
    numberOfPersons: 2,
    bookingAmount: 11000,
    advanceAmount: 5000,
    dueAmount: 6000,
    advanceDate: {
      $date: "2023-08-27T00:00:00.000Z",
    },
    bookingSource: "Booking.com",
    bookingBy: "DILIP JANA",
    plan: "MAP",
    contactNumber: "9732286660",
    remarks: "DONE",
    addedBy: {
      $oid: "64eaf409b9a9d4040e5072bb",
    },
    status: "CONFIRMED",
    accountType: "Hotel",
    createdAt: {
      $date: "2023-08-27T09:54:52.650Z",
    },
    updatedAt: {
      $date: "2023-08-28T17:55:37.902Z",
    },
    __v: 0,
    guestEmail: "",
  },
  {
    _id: {
      $oid: "64eb1e30283d830b8e85f5ea",
    },
    hotel: {
      $oid: "64e9bb668985b522199c254c",
    },
    serialNumber: "74",
    guestName: "ARPITA DAS",
    checkInDate: {
      $date: "2023-09-10T00:00:00.000Z",
    },
    checkOutDate: {
      $date: "2023-09-13T00:00:00.000Z",
    },
    roomCategory: "Junior Suite",
    numberOfRooms: 2,
    numberOfPersons: 4,
    bookingAmount: 11000,
    advanceAmount: 5000,
    dueAmount: 6000,
    advanceDate: {
      $date: "2023-08-27T00:00:00.000Z",
    },
    bookingSource: "Sayngo",
    bookingBy: "DILIP JANA",
    plan: "CP",
    contactNumber: "9733396664",
    remarks: "OK",
    addedBy: {
      $oid: "64eaf409b9a9d4040e5072bb",
    },
    status: "CONFIRMED",
    accountType: "Sayngo",
    createdAt: {
      $date: "2023-08-27T09:58:08.832Z",
    },
    updatedAt: {
      $date: "2023-08-27T09:58:08.832Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "64eb206c283d830b8e85f63a",
    },
    hotel: {
      $oid: "64e9bb668985b522199c254c",
    },
    serialNumber: "75",
    guestName: "ARINDAM GANGULY",
    checkInDate: {
      $date: "2023-09-24T00:00:00.000Z",
    },
    checkOutDate: {
      $date: "2023-09-26T00:00:00.000Z",
    },
    roomCategory: "Junior Suite",
    numberOfRooms: 1,
    numberOfPersons: 2,
    bookingAmount: 8000,
    advanceAmount: 3000,
    dueAmount: 5000,
    advanceDate: {
      $date: "2023-08-27T00:00:00.000Z",
    },
    bookingSource: "Offline",
    bookingBy: "DILIP JANA",
    plan: "EP",
    contactNumber: "6296092603",
    remarks: "DONE",
    addedBy: {
      $oid: "64eaf409b9a9d4040e5072bb",
    },
    status: "CONFIRMED",
    accountType: "Hotel",
    createdAt: {
      $date: "2023-08-27T10:07:40.386Z",
    },
    updatedAt: {
      $date: "2023-08-27T10:07:40.386Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "64eb214a283d830b8e85f686",
    },
    hotel: {
      $oid: "64e9bb668985b522199c254c",
    },
    serialNumber: "76",
    guestName: "SWAPAN DAS",
    checkInDate: {
      $date: "2023-10-12T00:00:00.000Z",
    },
    checkOutDate: {
      $date: "2023-10-13T00:00:00.000Z",
    },
    roomCategory: "Junior Suite",
    numberOfRooms: 2,
    numberOfPersons: 4,
    bookingAmount: 8600,
    advanceAmount: 2000,
    dueAmount: 6600,
    advanceDate: {
      $date: "2023-08-27T00:00:00.000Z",
    },
    bookingSource: "Paytm",
    bookingBy: "DILIP JANA",
    plan: "CP",
    contactNumber: "9732286660",
    remarks: "OK",
    addedBy: {
      $oid: "64eaf409b9a9d4040e5072bb",
    },
    status: "CONFIRMED",
    accountType: "Hotel",
    createdAt: {
      $date: "2023-08-27T10:11:22.209Z",
    },
    updatedAt: {
      $date: "2023-08-27T10:11:22.209Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "64eb21c5283d830b8e85f6b4",
    },
    hotel: {
      $oid: "64e9bb668985b522199c254c",
    },
    serialNumber: "77",
    guestName: "TANMOY SAMNTA",
    checkInDate: {
      $date: "2023-09-17T00:00:00.000Z",
    },
    checkOutDate: {
      $date: "2023-09-19T00:00:00.000Z",
    },
    roomCategory: "Suite",
    numberOfRooms: 1,
    numberOfPersons: 3,
    bookingAmount: 11200,
    advanceAmount: 5000,
    dueAmount: 6200,
    advanceDate: {
      $date: "2023-08-27T00:00:00.000Z",
    },
    bookingSource: "Lxiogo",
    bookingBy: "DILIP JANA",
    plan: "CP",
    contactNumber: "9732286660",
    remarks: "OK",
    addedBy: {
      $oid: "64eaf409b9a9d4040e5072bb",
    },
    status: "CONFIRMED",
    accountType: "Sayngo",
    createdAt: {
      $date: "2023-08-27T10:13:25.597Z",
    },
    updatedAt: {
      $date: "2023-08-27T10:13:25.597Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "64eb2441283d830b8e85f6bb",
    },
    hotel: {
      $oid: "64e9bb668985b522199c254c",
    },
    serialNumber: "78",
    guestName: "SANTANU LAYA",
    checkInDate: {
      $date: "2023-10-10T00:00:00.000Z",
    },
    checkOutDate: {
      $date: "2023-10-02T00:00:00.000Z",
    },
    roomCategory: "Superior Family",
    numberOfRooms: 4,
    numberOfPersons: 16,
    bookingAmount: 65000,
    advanceAmount: 20000,
    dueAmount: 45000,
    advanceDate: {
      $date: "2023-08-27T00:00:00.000Z",
    },
    bookingSource: "Travel Agent",
    bookingBy: "DILIP JANA",
    plan: "AP",
    contactNumber: "6296092603",
    remarks: "DONE",
    addedBy: {
      $oid: "64eaf409b9a9d4040e5072bb",
    },
    status: "CONFIRMED",
    accountType: "Sayngo",
    createdAt: {
      $date: "2023-08-27T10:24:01.738Z",
    },
    updatedAt: {
      $date: "2023-08-27T14:15:17.345Z",
    },
    __v: 0,
    guestEmail: "guest2@gmail.com",
  },
  {
    _id: {
      $oid: "64ece0c90e48d176b859118a",
    },
    hotel: {
      $oid: "64e9ad981a67cc970f211ef1",
    },
    serialNumber: "79",
    guestName: "ARIAN",
    guestEmail: "tuhin@tuhin.in",
    checkInDate: {
      $date: "2023-08-29T00:00:00.000Z",
    },
    checkOutDate: {
      $date: "2023-10-10T00:00:00.000Z",
    },
    roomCategory: "Same",
    numberOfRooms: 4,
    numberOfPersons: 4,
    bookingAmount: 5000,
    advanceAmount: 3000,
    dueAmount: 2000,
    advanceDate: {
      $date: "2023-08-29T00:00:00.000Z",
    },
    bookingSource: "Booking.com",
    bookingBy: "admin01",
    plan: "AP",
    contactNumber: "9098776677",
    remarks: "",
    addedBy: {
      $oid: "64bed2dc2d3efdf8191de735",
    },
    status: "CONFIRMED",
    accountType: "Hotel",
    createdAt: {
      $date: "2023-08-28T18:00:41.258Z",
    },
    updatedAt: {
      $date: "2023-08-30T08:25:48.317Z",
    },
    __v: 0,
  },
];

const users = [
  {
    _id: {
      $oid: "64bed2dc2d3efdf8191de735",
    },
    username: "admin01",
    password: "$2a$10$WPiUP0OhKZzTAV3/YxkTruGw93RcF/BkGPncz08jpCLpiAqm9wni2",
    role: "ADMIN",
    hotel: [
      {
        $oid: "64bed35f969a9f84b97f699a",
      },
      {
        $oid: "64bed3d4969a9f84b97f69af",
      },
      {
        $oid: "64cd2e73578a51c730485210",
      },
      {
        $oid: "64cd30e6578a51c730485214",
      },
      {
        $oid: "64cd71a3dd127e6cdab8b659",
      },
      {
        $oid: "64cd7392c57642a13585e250",
      },
      {
        $oid: "64cd95aefadd0c356eb6f35e",
      },
      {
        $oid: "64ce1848a8e833771d4e6527",
      },
      {
        $oid: "64ce1a86a8e833771d4e6534",
      },
      {
        $oid: "64d0b49944b04a25d671f829",
      },
      {
        $oid: "64d1299db67146081c53135c",
      },
      {
        $oid: "64d129d7b67146081c531360",
      },
      {
        $oid: "64d17b737b27801b8a033d5f",
      },
      {
        $oid: "64d1d2862dfef42ed569634a",
      },
      {
        $oid: "64d24537a4ad5b8ec322f52a",
      },
      {
        $oid: "64e9ad981a67cc970f211ef1",
      },
      {
        $oid: "64e9b1bf1a67cc970f211f40",
      },
      {
        $oid: "64e9b3511a67cc970f211f47",
      },
      {
        $oid: "64e9bb668985b522199c254c",
      },
      {
        $oid: "64eaf4aab9a9d4040e5072d5",
      },
      {
        $oid: "64eaf53ab9a9d4040e5072dc",
      },
      {
        $oid: "65119395ac3283a55b6e71eb",
      },
    ],
    createdAt: {
      $date: "2023-07-24T19:37:00.088Z",
    },
    updatedAt: {
      $date: "2023-09-25T14:05:10.324Z",
    },
    __v: 0,
    serialNumber: "1",
    isActive: true,
    loginTime: {
      $date: "2023-09-18T13:35:32.588Z",
    },
    name: "Admin 01",
  },
  {
    _id: {
      $oid: "64e9adef1a67cc970f211f01",
    },
    name: "SUBHAM SAHOO",
    serialNumber: "1",
    username: "subhamsahoo311@gmail.com",
    password: "$2a$10$ynwNwdqTiaPUZJbDqvZjt.i5M4doo6MW8TFzK1b45xBZ5Sa5jvomG",
    phoneNumber: "9748314053",
    email: "subhamsahoo311@gmail.com",
    role: "SUBADMIN",
    isActive: true,
    addedBy: {
      $oid: "64bed2dc2d3efdf8191de735",
    },
    hotel: [
      {
        $oid: "64e9ad981a67cc970f211ef1",
      },
    ],
    createdAt: {
      $date: "2023-08-26T07:46:55.503Z",
    },
    updatedAt: {
      $date: "2023-08-26T07:46:55.503Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "64e9bb9f8985b522199c255d",
    },
    name: "GOUTAM DUTTA",
    serialNumber: "2",
    username: "goutam@sayngo.com",
    password: "$2a$10$KrT1H2uWpYibWahsKViw2eBV3YPoVpJYCtKcqL3IBZyLXHsLdHt5e",
    phoneNumber: "9635427007",
    email: "goutam@sayngo.com",
    role: "SUBADMIN",
    isActive: true,
    addedBy: {
      $oid: "64bed2dc2d3efdf8191de735",
    },
    hotel: [
      {
        $oid: "64e9bb668985b522199c254c",
      },
      {
        $oid: "64e9b3511a67cc970f211f47",
      },
      {
        $oid: "64e9b1bf1a67cc970f211f40",
      },
    ],
    createdAt: {
      $date: "2023-08-26T08:45:19.780Z",
    },
    updatedAt: {
      $date: "2023-08-26T08:48:19.672Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "64eaf3dcb9a9d4040e5072b0",
    },
    name: "SUKANTA",
    serialNumber: "3",
    username: "sukanta@sayngo.com",
    password: "$2a$10$9lI/7YcVbpXO5eJIbDww1eXYaU5C5qQiDUyvQgDSU..A8t.YgYaCO",
    phoneNumber: "9503966286",
    email: "sukanta@sayngo.com",
    role: "SUBADMIN",
    isActive: true,
    addedBy: {
      $oid: "64bed2dc2d3efdf8191de735",
    },
    hotel: [
      {
        $oid: "64e9b3511a67cc970f211f47",
      },
      {
        $oid: "64eaf4aab9a9d4040e5072d5",
      },
    ],
    createdAt: {
      $date: "2023-08-27T06:57:32.145Z",
    },
    updatedAt: {
      $date: "2023-08-27T07:04:31.246Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "64eaf409b9a9d4040e5072bb",
    },
    name: "DILIP JANA",
    serialNumber: "4",
    username: "dilip@sayngo.com",
    password: "$2a$10$YQKHb/5CLu11IfLDzeejKeYxjOPMzokBr/C3iFprCU3Sn/pFZLNXa",
    phoneNumber: "9732286660",
    email: "dilip@sayngo.com",
    role: "SUBADMIN",
    isActive: true,
    addedBy: {
      $oid: "64bed2dc2d3efdf8191de735",
    },
    hotel: [
      {
        $oid: "64eaf53ab9a9d4040e5072dc",
      },
      {
        $oid: "64e9bb668985b522199c254c",
      },
    ],
    createdAt: {
      $date: "2023-08-27T06:58:17.758Z",
    },
    updatedAt: {
      $date: "2023-08-27T08:30:38.593Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "64eaf435b9a9d4040e5072c6",
    },
    name: "SANCHITA",
    serialNumber: "5",
    username: "sanchita@sayngo.com",
    password: "$2a$10$rHzGN0G.sk83UTNzHliTTe/tBlxf9xjtqclcNkGJqY2IjTEUb817G",
    phoneNumber: "9733386661",
    email: "sanchita@sayngo.com",
    role: "SUBADMIN",
    isActive: true,
    addedBy: {
      $oid: "64bed2dc2d3efdf8191de735",
    },
    hotel: [
      {
        $oid: "64e9b3511a67cc970f211f47",
      },
      {
        $oid: "64e9b1bf1a67cc970f211f40",
      },
    ],
    createdAt: {
      $date: "2023-08-27T06:59:01.545Z",
    },
    updatedAt: {
      $date: "2023-08-27T08:31:01.089Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "64eb03b6283d830b8e85f1a0",
    },
    name: "RIMA",
    serialNumber: "6",
    username: "rima@sayngo.com",
    password: "$2a$10$PjQ5e1C/4Rslf5Jm67aUVuQ6./lDOn4SaZFn3SlKjxcU6g39kWhsG",
    phoneNumber: "9876456789",
    email: "rima@sayngo.com",
    role: "SUBADMIN",
    isActive: true,
    addedBy: {
      $oid: "64bed2dc2d3efdf8191de735",
    },
    hotel: [
      {
        $oid: "64e9b3511a67cc970f211f47",
      },
      {
        $oid: "64e9ad981a67cc970f211ef1",
      },
      {
        $oid: "64eaf4aab9a9d4040e5072d5",
      },
    ],
    createdAt: {
      $date: "2023-08-27T08:05:10.482Z",
    },
    updatedAt: {
      $date: "2023-08-27T08:30:15.394Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "64ef5abe68526c855847e029",
    },
    name: "TUHIN BAR",
    serialNumber: "13",
    username: "tuhinbar02@gmail.com",
    password: "$2a$10$7vn.qV493ZNNy6AkLrPfVe09mQjQdWbI20Ybt2AQGffYU19/mwnEe",
    phoneNumber: "9098776655",
    email: "tuhinbar02@gmail.com",
    role: "ADMIN",
    isActive: true,
    addedBy: {
      $oid: "64bed2dc2d3efdf8191de735",
    },
    hotel: [
      {
        $oid: "64eaf53ab9a9d4040e5072dc",
      },
      {
        $oid: "64e9bb668985b522199c254c",
      },
      {
        $oid: "65119395ac3283a55b6e71eb",
      },
    ],
    createdAt: {
      $date: "2023-08-30T15:05:34.721Z",
    },
    updatedAt: {
      $date: "2023-09-25T14:05:10.324Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "64ef6404592fd924f817cc59",
    },
    name: "ARIAN SHAIKH",
    serialNumber: "14",
    username: "ariansk90@gmail.com",
    password: "$2a$10$iZNIJTDPwIXN46zB478AcuPnK.ZM6OJQBu0MhiuLJRw6OgnCzyBd2",
    phoneNumber: "7003483189",
    email: "ariansk90@gmail.com",
    role: "SUBADMIN",
    isActive: true,
    addedBy: {
      $oid: "64bed2dc2d3efdf8191de735",
    },
    hotel: [
      {
        $oid: "64eaf4aab9a9d4040e5072d5",
      },
      {
        $oid: "64f5e6223d706604aee6a095",
      },
    ],
    createdAt: {
      $date: "2023-08-30T15:45:08.455Z",
    },
    updatedAt: {
      $date: "2023-09-18T14:49:38.709Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "6511b2c6a1803f8df800d36d",
    },
    name: "TUHIN BAR",
    serialNumber: "15",
    username: "tuhinbr99@gmail.com",
    password: "$2a$10$SKQpsXiQFzGC6NLBWrPrhOJhBCBZV43wePsWI5g3J7x13JSE/cmWq",
    phoneNumber: "9382689906",
    email: "tuhinbr99@gmail.com",
    role: "SUBADMIN",
    isActive: true,
    addedBy: {
      $oid: "64bed2dc2d3efdf8191de735",
    },
    hotel: [
      {
        $oid: "65119395ac3283a55b6e71eb",
      },
    ],
    createdAt: {
      $date: "2023-09-25T16:18:14.359Z",
    },
    updatedAt: {
      $date: "2023-09-25T16:18:14.359Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "6525693e9debcfbc03fa9d7f",
    },
    name: "SUBHA GHANTA",
    serialNumber: "16",
    username: "subhaghanta325@gmail.com",
    password: "$2a$10$8QCqyjJccibkmm.CN5NxMuzFIlLxOFR81rGJ602U7fB9Z11uCLp/.",
    phoneNumber: "9775967332",
    email: "subhaghanta325@gmail.com",
    role: "SUBADMIN",
    isActive: true,
    addedBy: {
      $oid: "64bed2dc2d3efdf8191de735",
    },
    hotel: [
      {
        $oid: "65119395ac3283a55b6e71eb",
      },
      {
        $oid: "64eaf53ab9a9d4040e5072dc",
      },
      {
        $oid: "64e9bb668985b522199c254c",
      },
      {
        $oid: "64e9b1bf1a67cc970f211f40",
      },
      {
        $oid: "64e9ad981a67cc970f211ef1",
      },
      {
        $oid: "64e9b3511a67cc970f211f47",
      },
      {
        $oid: "64eaf4aab9a9d4040e5072d5",
      },
    ],
    createdAt: {
      $date: "2023-10-10T15:09:50.095Z",
    },
    updatedAt: {
      $date: "2023-10-10T15:09:50.095Z",
    },
    __v: 0,
  },
];

const hotels = [
  {
    _id: {
      $oid: "64e9ad981a67cc970f211ef1",
    },
    serialNumber: "1",
    hotelName: "HOLIDAY BEACH RESORT",
    location: "MANDARMANI",
    ownerName: "SUBHAM SAHOO",
    ownerContact: {
      phone: "9732286662",
      email: "holidaybeachresortmandarmani99@gmail.com",
    },
    isActive: true,
    GSTNumber: "19ABCDEF",
    panNumber: "FWJPS6592D",
    aadharNumber: "822510603358",
    tradeLicense: "No",
    roomCategories: ["Deluxe", " Same", " Quadruple", " Family"],
    bank: "STATE BANK",
    accountNumber: "1234455678",
    ifscCode: "SBIN0008",
    otherDocuments:
      "https://res.cloudinary.com/drtr0suuh/raw/upload/v1693035927/lqawrkefnifbyacjuybr",
    documentId: "lqawrkefnifbyacjuybr",
    frontOfficeContact: "9748314053",
    addedBy: {
      $oid: "64bed2dc2d3efdf8191de735",
    },
    createdAt: {
      $date: "2023-08-26T07:45:28.700Z",
    },
    updatedAt: {
      $date: "2023-08-26T07:45:28.700Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "64e9b1bf1a67cc970f211f40",
    },
    serialNumber: "2",
    hotelName: "PARTH KING BEACH RTESORT",
    location: "MANDARMANI",
    ownerName: "MISHRA JI",
    ownerContact: {
      phone: "9898989890",
      email: "parthking@gmail.com",
    },
    isActive: true,
    GSTNumber: "12AABBB",
    panNumber: "FWJPS6592D",
    aadharNumber: "822510603358",
    tradeLicense: "33444",
    roomCategories: [
      "Premium Room",
      " Titanium Room",
      " Deluxe Double Room with Side Sea View",
      " Super Deluxe Room",
      " Platinum Room",
    ],
    bank: "STATE BANK",
    accountNumber: "12345676788",
    ifscCode: "SBIN0008",
    otherDocuments:
      "https://res.cloudinary.com/drtr0suuh/raw/upload/v1693036990/efzt9izjf7u2spzfmsai",
    documentId: "efzt9izjf7u2spzfmsai",
    frontOfficeContact: "9878675432",
    addedBy: {
      $oid: "64bed2dc2d3efdf8191de735",
    },
    createdAt: {
      $date: "2023-08-26T08:03:11.639Z",
    },
    updatedAt: {
      $date: "2023-08-26T08:03:11.639Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "64e9b3511a67cc970f211f47",
    },
    serialNumber: "3",
    hotelName: "HINDUSTHAN INN",
    location: "MANDARMANI",
    ownerName: "BABAI DA",
    ownerContact: {
      phone: "8787898989",
      email: "hindusthaninn@gmail.com",
    },
    isActive: true,
    GSTNumber: "123234567898",
    panNumber: "FWJPS6592D",
    aadharNumber: "822510603358",
    tradeLicense: "33444",
    roomCategories: [
      "Standard Double Room",
      " Deluxe Double Room with Balcony and Sea View",
      " Deluxe Double Room with Balcony",
      " Family Suite",
      " Luxury Triple Room",
    ],
    bank: "IOB",
    accountNumber: "23232323",
    ifscCode: "SBIN0008",
    otherDocuments:
      "https://res.cloudinary.com/drtr0suuh/raw/upload/v1693037392/mcxk3psx7ruqr6nnv51y",
    documentId: "mcxk3psx7ruqr6nnv51y",
    frontOfficeContact: "9732286662",
    addedBy: {
      $oid: "64bed2dc2d3efdf8191de735",
    },
    createdAt: {
      $date: "2023-08-26T08:09:53.110Z",
    },
    updatedAt: {
      $date: "2023-08-26T08:09:53.110Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "64e9bb668985b522199c254c",
    },
    serialNumber: "4",
    hotelName: "GRAND BEACH RESORT",
    location: "MANDARMANI",
    ownerName: "ATANU DAS",
    ownerContact: {
      phone: "9890989098",
      email: "grand@gmail.com",
    },
    isActive: true,
    GSTNumber: "12223",
    panNumber: "FWJPS6592D",
    aadharNumber: "822510603358",
    tradeLicense: "1234",
    roomCategories: [
      "Suite",
      " Executive Triple",
      " Superior Family",
      " Junior Suite",
      " Presidential Suite",
    ],
    bank: "IOB",
    accountNumber: "55666",
    ifscCode: "SBIN0008",
    otherDocuments:
      "https://res.cloudinary.com/drtr0suuh/raw/upload/v1693039461/fugafui46swevjfrohon",
    documentId: "fugafui46swevjfrohon",
    frontOfficeContact: "9636427007",
    addedBy: {
      $oid: "64bed2dc2d3efdf8191de735",
    },
    createdAt: {
      $date: "2023-08-26T08:44:22.558Z",
    },
    updatedAt: {
      $date: "2023-08-26T08:44:22.558Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "64eaf4aab9a9d4040e5072d5",
    },
    serialNumber: "5",
    hotelName: "MEGHA BEACH RESORT",
    location: "MANDARMANI",
    ownerName: "SANTANU",
    ownerContact: {
      phone: "9999999999",
      email: "santanu@gmail.com",
    },
    isActive: true,
    GSTNumber: "196666",
    panNumber: "FWJPS6592D",
    aadharNumber: "121212121212",
    tradeLicense: "33444",
    roomCategories: ["Deluxe", " Quadruple", " Family. Suite"],
    bank: "STATEBANK",
    accountNumber: "667788",
    ifscCode: "SBIN0008",
    otherDocuments:
      "https://res.cloudinary.com/drtr0suuh/raw/upload/v1693119657/e46wtanfgo16jhirigur",
    documentId: "e46wtanfgo16jhirigur",
    frontOfficeContact: "9732286662",
    addedBy: {
      $oid: "64bed2dc2d3efdf8191de735",
    },
    createdAt: {
      $date: "2023-08-27T07:00:58.100Z",
    },
    updatedAt: {
      $date: "2023-08-27T07:00:58.100Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "64eaf53ab9a9d4040e5072dc",
    },
    serialNumber: "10",
    hotelName: "SEA COAST",
    location: "DIGHA",
    ownerName: "PRADHAN",
    ownerContact: {
      phone: "7878787878",
      email: "pradhan@gmail.com",
    },
    isActive: true,
    GSTNumber: "12AABBBG",
    panNumber: "FWJPS6592D",
    aadharNumber: "232323232323",
    tradeLicense: "y7777",
    roomCategories: ["Standard", " AC Deluxe", " Family "],
    bank: "STATE",
    accountNumber: "455677777",
    ifscCode: "SBIN0008",
    otherDocuments:
      "https://res.cloudinary.com/drtr0suuh/raw/upload/v1693119801/vkrc69yoppiale7iul1b",
    documentId: "vkrc69yoppiale7iul1b",
    frontOfficeContact: "8582858282",
    addedBy: {
      $oid: "64bed2dc2d3efdf8191de735",
    },
    createdAt: {
      $date: "2023-08-27T07:03:22.967Z",
    },
    updatedAt: {
      $date: "2023-08-29T16:56:29.584Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "65119395ac3283a55b6e71eb",
    },
    serialNumber: "12",
    hotelName: "MIRA INTERNATIONAL",
    location: "DIGHA",
    ownerName: "SUBHAM",
    ownerContact: {
      phone: "9775967332",
      email: "subhaghanta325@gmail.com",
    },
    isActive: true,
    GSTNumber: "196666DCJPG",
    panNumber: "DCJPG2298L",
    aadharNumber: "812290284085",
    tradeLicense: "33444",
    roomCategories: ["DELUX"],
    bank: "STATE BANK OF INDIA",
    accountNumber: "121212121212",
    ifscCode: "SBIN0012440",
    otherDocuments:
      "https://res.cloudinary.com/drtr0suuh/raw/upload/v1695650708/vkbitbp4fol0n1smk65h",
    documentId: "vkbitbp4fol0n1smk65h",
    frontOfficeContact: "9775967332",
    addedBy: {
      $oid: "64ef5abe68526c855847e029",
    },
    createdAt: {
      $date: "2023-09-25T14:05:09.725Z",
    },
    updatedAt: {
      $date: "2023-09-25T14:05:09.725Z",
    },
    __v: 0,
  },
];

//🚀 Check-in bookingData

//✅ Step-1 -> Calculate the number of check-ins for today
function calculateTodaysCheckIns(bookingData: any[]) {
  const currentDate = new Date().toISOString().split("T")[0];
  const todaysCheckIns = bookingData.filter((record) => {
    const checkInDate = new Date(record.checkInDate.$date)
      .toISOString()
      .split("T")[0];
    return checkInDate === currentDate;
  });
  return todaysCheckIns.length;
}
const todaysCheckIns = calculateTodaysCheckIns(bookingData);

export const Checkin = {
  color: "#8884d8",
  icon: "/userIcon.svg",
  title: "Today's Check-Ins",
  number: todaysCheckIns,
  dataKey: "users",
  percentage: 45,
  reactIcon: "BsCalendar2Date",
  chartData: [
    { name: "Sun", users: 400 },
    { name: "Mon", users: 600 },
    { name: "Tue", users: 500 },
    { name: "Wed", users: 700 },
    { name: "Thu", users: 400 },
    { name: "Fri", users: 500 },
    { name: "Sat", users: 450 },
  ],
};

//🚀 Check-in bookingData

//✅ Step-1 -> Calculate the number of check-ins for today
function calculateTodaysCheckOut(bookingData: any[]) {
  const currentDate = new Date().toISOString().split("T")[0];
  const todaysCheckOut = bookingData.filter((record) => {
    const checkOutDate = new Date(record.checkOutDate.$date)
      .toISOString()
      .split("T")[0];
    return checkOutDate === currentDate;
  });
  return todaysCheckOut.length;
}
const todaysCheckOut = calculateTodaysCheckOut(bookingData);

export const Checkout = {
  color: "#8884d8",
  icon: "/userIcon.svg",
  title: "Today's Check-Outs",
  number: todaysCheckOut,
  dataKey: "users",
  percentage: 45,
  reactIcon: "BsCalendar2Date",
  chartData: [
    { name: "Sun", users: 400 },
    { name: "Mon", users: 600 },
    { name: "Tue", users: 500 },
    { name: "Wed", users: 700 },
    { name: "Thu", users: 400 },
    { name: "Fri", users: 500 },
    { name: "Sat", users: 450 },
  ],
};

//🚀 Today's Booking bookingData

//✅ Step-1 -> Calculate the number of check-ins for today
function calculateTodaysBooking(bookingData: any[]) {
  const currentDate = new Date().toISOString().split("T")[0];
  const todaysBooking = bookingData.filter((record) => {
    const TodaysDate = new Date(record.createdAt.$date)
      .toISOString()
      .split("T")[0];
    return TodaysDate === currentDate;
  });
  return todaysBooking.length;
}
const todaysBooking = calculateTodaysBooking(bookingData);

export const TodaysBooking = {
  color: "#8884d8",
  icon: "/userIcon.svg",
  title: "Today's Booking",
  number: todaysBooking,
  dataKey: "users",
  percentage: 45,
  reactIcon: "BsCalendar2Date",
  chartData: [
    { name: "Sun", users: 400 },
    { name: "Mon", users: 600 },
    { name: "Tue", users: 500 },
    { name: "Wed", users: 700 },
    { name: "Thu", users: 400 },
    { name: "Fri", users: 500 },
    { name: "Sat", users: 450 },
  ],
};

//🚀 Today's Modified Booking bookingData

//✅ Step-1 -> Calculate the number of check-ins for today
function calculateTodaysModifiedBooking(bookingData: any[]) {
  const currentDate = new Date().toISOString().split("T")[0];
  const todaysModification = bookingData.filter((record) => {
    const ModifiedDate = new Date(record.updatedAt.$date)
      .toISOString()
      .split("T")[0];
    return ModifiedDate === currentDate;
  });
  return todaysModification.length;
}
const todaysModification = calculateTodaysModifiedBooking(bookingData);

export const TodaysModifiedBooking = {
  color: "#8884d8",
  icon: "/userIcon.svg",
  title: "Today's Modification",
  number: todaysModification,
  dataKey: "users",
  percentage: 45,
  reactIcon: "BsCalendar2Date",
  chartData: [
    { name: "Sun", users: 400 },
    { name: "Mon", users: 600 },
    { name: "Tue", users: 500 },
    { name: "Wed", users: 700 },
    { name: "Thu", users: 400 },
    { name: "Fri", users: 500 },
    { name: "Sat", users: 450 },
  ],
};

//🚀 Today's Cancelled Booking bookingData

//✅ Step-1 -> Calculate the number of cancelled booking for today
function calculateTodaysCancelledBooking(bookingData: any[]) {
  const CancelledString = "CANCELLED";
  const todaysCancelledBooking = bookingData.filter((record) => {
    return record.status === CancelledString;
  });
  return todaysCancelledBooking.length;
}
const todaysCancelledBooking = calculateTodaysCancelledBooking(bookingData);

export const TodaysCancelledBooking = {
  color: "#8884d8",
  icon: "/userIcon.svg",
  title: "Today's Cancelled Booking",
  number: todaysCancelledBooking,
  dataKey: "users",
  percentage: 45,
  reactIcon: "BsCalendar2Date",
  chartData: [
    { name: "Sun", users: 400 },
    { name: "Mon", users: 600 },
    { name: "Tue", users: 500 },
    { name: "Wed", users: 700 },
    { name: "Thu", users: 400 },
    { name: "Fri", users: 500 },
    { name: "Sat", users: 450 },
  ],
};

//🚀 Total User Count

//✅ Step-1 -> Calculate the number of users
function calculateTotalUsers(bookingData: any[]) {
  return bookingData.length;
}
const totalUsers = calculateTotalUsers(users);

export const TotalUsers = {
  color: "#8884d8",
  icon: "/userIcon.svg",
  title: "Total Users",
  number: totalUsers,
  dataKey: "users",
  percentage: 45,
  reactIcon: "BsCalendar2Date",
  chartData: [
    { name: "Sun", users: 400 },
    { name: "Mon", users: 600 },
    { name: "Tue", users: 500 },
    { name: "Wed", users: 700 },
    { name: "Thu", users: 400 },
    { name: "Fri", users: 500 },
    { name: "Sat", users: 450 },
  ],
};

//🚀 Total Revenue
//✅ Step-1 -> Filter confirmed hotels

const confirmedBookings = bookingData.filter(
  (record) => record.status === "CONFIRMED",
);

const currentDate = new Date().toISOString();
const futureBookings = confirmedBookings.filter((record) => {
  const checkInDate = new Date(record.checkInDate.$date).toISOString();
  return checkInDate > currentDate;
});

const totalRevenue = futureBookings.reduce((total, booking) => {
  return total + booking.bookingAmount;
}, 0);

export const TotalRevenue = {
  color: "#8884d8",
  icon: "/userIcon.svg",
  title: "Upcoming Total Revenue",
  number: totalRevenue,
  dataKey: "users",
  percentage: 45,
  reactIcon: "BsCalendar2Date",
  chartData: [
    { name: "Sun", users: 400 },
    { name: "Mon", users: 600 },
    { name: "Tue", users: 500 },
    { name: "Wed", users: 700 },
    { name: "Thu", users: 400 },
    { name: "Fri", users: 500 },
    { name: "Sat", users: 450 },
  ],
};
//🚀 Upcoming Total Due

//✅ Step-1 -> Filter Upcoming Total Due

const confirmedBookingsForDue = bookingData.filter(
  (record) => record.status === "CONFIRMED",
);

const currentDateForDue = new Date().toISOString();
const futureBookingsForDue = confirmedBookingsForDue.filter((record) => {
  const checkInDateForDue = new Date(record.checkInDate.$date).toISOString();
  return checkInDateForDue > currentDateForDue;
});

const totalDueAmount = futureBookingsForDue.reduce((total, booking) => {
  return total + booking.dueAmount;
}, 0);

export const TotalDue = {
  color: "#8884d8",
  icon: "/userIcon.svg",
  title: "Upcoming Total Due",
  number: totalDueAmount,
  dataKey: "users",
  percentage: 45,
  reactIcon: "BsCalendar2Date",
  chartData: [
    { name: "Sun", users: 400 },
    { name: "Mon", users: 600 },
    { name: "Tue", users: 500 },
    { name: "Wed", users: 700 },
    { name: "Thu", users: 400 },
    { name: "Fri", users: 500 },
    { name: "Sat", users: 450 },
  ],
};

//🚀 Total Hotel Count

//✅ Step-1 -> Calculate the number of hotels

function calculateTotalHotels(bookingData: any[]) {
  return bookingData.length;
}
const totalHotels = calculateTotalHotels(hotels);

export const TotalHotels = {
  color: "#8884d8",
  icon: "/userIcon.svg",
  title: "Total Hotels",
  number: totalHotels,
  dataKey: "users",
  percentage: 45,
  reactIcon: "BsCalendar2Date",
  chartData: [
    { name: "Sun", users: 400 },
    { name: "Mon", users: 600 },
    { name: "Tue", users: 500 },
    { name: "Wed", users: 700 },
    { name: "Thu", users: 400 },
    { name: "Fri", users: 500 },
    { name: "Sat", users: 450 },
  ],
};
