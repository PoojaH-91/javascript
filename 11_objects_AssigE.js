

let yesBank={
    bankname: "YES",
    location: "Pune",
    accountNo: "O1234567",
    ifsc: "YESN0000",
    interestRate: "10%",
    showDetals: function () {
        let details = `Bank Name: ${this.bankname}, Location: ${this.location}, Account Number: ${this.accountNo}, IFSC: ${this.ifsc}, Interest Rate: ${this.interestRate}`;
        console.log(details);
      }
};
let axisBank={
    bankname: "AXIS",
    location: "Mumbai",
    accountNo: "O1234123",
    ifsc: "AXISN0000",
    interestRate: "8.5%",
    showDetals: function () {
        let details = `Bank Name: ${this.bankname}, Location: ${this.location}, Account Number: ${this.accountNo}, IFSC: ${this.ifsc}, Interest Rate: ${this.interestRate}`;
        console.log(details);
      }
};
let hdfcBank={
    bankname: "HDFC",
    location: "Pune",
    accountNo: "O1234344",
    ifsc: "HDFCN0000",
    interestRate: "9%",
    showDetals: function () {
        let details = `Bank Name: ${this.bankname}, Location: ${this.location}, Account Number: ${this.accountNo}, IFSC: ${this.ifsc}, Interest Rate: ${this.interestRate}`;
        console.log(details);
      }
};
let sbiBank={
    bankname: "sbiBank",
    location: "Bhilai",
    accountNo: "O123456",
    ifsc: "SBIN0000",
    interestRate: "10%",
    showDetals: function () {
        let details = `Bank Name: ${this.bankname}, Location: ${this.location}, Account Number: ${this.accountNo}, IFSC: ${this.ifsc}, Interest Rate: ${this.interestRate}`;
        console.log(details);
        //return details;
      }
};


console.log(`------- Invoking or calling object method----------`);

yesBank.showDetals();
axisBank.showDetals();
hdfcBank.showDetals();
sbiBank.showDetals();