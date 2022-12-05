const email = "codecamp@gmail.com"

email.includes("@")
console.log(email.includes("@"))

email.split("@")
console.log(email.split("@"))

console.log(email.split("@")[0])
console.log(email.split("@")[1])

let userMail = email.split("@")[0]
console.log(userMail)

let company = email.split("@")[1]
console.log(company)

let maskingMail = []
maskingMail.push(userMail[0])
maskingMail.push(userMail[1])
maskingMail.push(userMail[2])
maskingMail.push(userMail[3])
maskingMail.push("*")
maskingMail.push("*")
maskingMail.push("*")
console.log(maskingMail)
let result = maskingMail.join("") +"@" + company
console.log("짜잔!"+ result)
