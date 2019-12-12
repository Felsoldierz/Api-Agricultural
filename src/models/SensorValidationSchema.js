module.exports = MeasurementValidationSchema = {
    type: 'object',
    properties: {
        device: {
            id:{
                type: 'string'
            }
        },
        datatype: {
            id:{
                type: 'string'
            }
        }
    },
    required: ['device', 'datatype']
};
