import mongoose from "mongoose";

const subscriptionSchema= new mongoose.Schema({
    price:{

    },
    currency:{
        type: String,
        enum: ['USD','EUR','YEN','INR'],
        default:'INR'
    },
    frequency:{
        type: String,
        enum:['daily','weekly','monthly','yearly'],
    },
    category:{
        type: String,
        enum: ['sports','news','entertainment','lifestyle','technology','finance','politics','other'],
        required: true,
    },
    PaymentMethod:{

    },
    status:{

    },
    startDate:{
        type:Date,
        required: true,
        validate:{
            validator: (value) => value <= new Date(),
            message: 'Start data must be in the past',
        }
    },
    renewalDate:{
        type:Date,
        validate:{
            validator: function(value){
                return value > this.startDate;
            },
            message: 'Start data must be after the start date',
        }
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required: true,
        index: true,
    }
},{timestamps: true}); 

// if the renewal date is missing auto-calculate the renewal date
subscriptionSchema.pre('save',function(next){
    if(!this.renewalDate){
        const renewalPeriod={
            daily: 1,
            weekly: 7,
            monthly: 30,
            yearly:365,
        };
        this.renewalDate=new Date(this.startDate);
        this.renewalDate.setDate(this.renewalDate.getDate()+renewalPeriods[this.frequency()]);
    }

    if(this.renewalDate< new Date()){
        this.status='expired';
    }

    next();
})



