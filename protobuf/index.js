const protobuf = require('protobufjs')

protobuf.load('./awsome.proto', (err, root) => {
    if (err) throw err;
    const AwsomeMessage = root.lookupType("awesomepackage.AwesomeMessage")

    const payload = {
        awesomeField: "AwsomeString"
    }

    const errMsg = AwsomeMessage.verify(payload)
    if (errMsg) throw new Error(errMsg)

    const message = AwsomeMessage.create(payload)

    const buffer = AwsomeMessage.encode(message).finish()
    console.log(buffer)
    decode(AwsomeMessage, buffer)
})

function decode(type, buffer) {
    const message = type.decode(buffer);
    console.log(message)

    const object = type.toObject(message, {
        longs: String,
        enums: String,
        bytes: String,
        // see ConversionOptions
    });

    console.log(object)
}