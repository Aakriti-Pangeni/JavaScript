import crypto from 'crypto';


//password Hashing
const password = "HiiAakriti"
export const encrypted = crypto.createHash('sha512')
                        .update(password)
                        .digest('base64url')

console.log(encrypted)


//authenticate message
//json web token jwt

const secretKey = crypto.randomBytes(16).toString("base64")
console.log("key:", secretKey)
export const token = crypto.createHmac('sha256', secretKey)
                .update('password')
                .digest('hex')

console.log("Token is : ", token)


//end to end encryption
const message = "Ohh hii"

const algorithm = 'aes-256-ctr';
const iv = crypto.randomBytes(16)
const key = crypto.randomBytes(32)

const ciphertext = crypto.createCipheriv(algorithm, key, iv)

let encryption = ciphertext.update(message, "utf-8", "base64" )
encryption += ciphertext.final("base64")
console.log("Encyrpted message: ", encryption)


//decrypt the message

const decipher =crypto.createDecipheriv(algorithm, key, iv)
let decryption = decipher.update(encryption, 'base64', 'utf-8')
decryption += decipher.final('utf-8')
console.log("decrypted text: ", decryption)


//uuid
const UUID = crypto.randomUUID()
console.log(UUID)

//digital signature
//publickey, privatekey

const {publicKey, privateKey} = crypto.generateKeyPairSync('rsa', {
    modulusLength: 2048
})
console.log("Public Key ", publicKey)
console.log("Private Key", privateKey)

//signature

const sign = crypto.createSign('sha256').update('aakriti')
const signature = sign.sign(privateKey, "base64")

//verify signature
const verify = crypto.createVerify('sha256').update('aakriti')
const valid = verify.verify(publicKey, signature, 'base64')
console.log("Signature is : ", signature);


if (valid){
    console.log("the signature is valid")
}
else{
    console.log("Signature is not valid")
}

//exercise
//hash a password using crypto and compare it to login into the system
