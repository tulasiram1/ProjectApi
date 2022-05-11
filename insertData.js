const { default: mongoose } = require('mongoose');
const readXlsxFile = require('read-excel-file/node')
// const AllCollegesModel = require('./models/AllColleges')
const BranchME = require('./models/BrachAE');
// // File path.
// readXlsxFile('ALL.xlsx').then((rows) => {
//     console.log(rows);
// }).catch((err) => { console.log(err); });

const insert = async () => {
    try {
        await mongoose.connect("");
        console.log('connection success');
        const data = await readXlsxFile('AE.xlsx');
        for (i = 1; i < data.length; i++) {
            console.log(data[i][0]);
            const res = await BranchME.create({ IN: data[i][0], CR: parseInt(data[i][1], 10) });
        }

    } catch (err) {
        console.log(err);
    }
}

insert();



