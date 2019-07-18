"use strict";

const XlsxPopulate = require('../../lib/XlsxPopulate');

// Load the input workbook from file.
XlsxPopulate.fromFileAsync("in.xlsx").then(workbook => {
    workbook.sheet(3).drawings('Picture 2').image('./new_image.png')
    return workbook.toFileAsync('out.xlsx')
})
.catch(err => console.error(err));