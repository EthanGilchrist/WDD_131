const aCourse = {
    code: 'CSE280',
    name: 'Discrete Mathematics',
    sections: [
        {sectionNum: 3, roomNum: "STC 381", enrolled: 21, days: "MWF", instructor: "Chuck Norris"},
        {sectionNum: 4, roomNum: "STC 381", enrolled: 19, days: "MWF", instructor: "John Cena"}
    ],
    logo: 'images/js-logo.png',

    enrollStudent: function(sectionNum) {
        let enrolled = false;
        for (let i = 0; i < this.sections.length; i++)
        {
            if (this.sections[i].sectionNum == sectionNum)
            {
                this.sections[i].enrolled++;
                enrolled = true;
                break;
            }
        }
        if (enrolled)
        console.log('student enrolled');
        else console.log('section not found');
    }
};



// const aCourse = {
//     code: 'CSE121b',
//     name: 'Javascript Language',
//     logo: 'images/js-logo.png',
//     sections: [
//     { sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro T'},
//     { sectionNum: 2, roomNum: 'STC 347', enrolled: 28, days: 'TTh', instructor: 'Sis A'}],
//     enrollStudent: function (sectionNum) {
//         // find the right section...Array.findIndex will work here
//         const sectionIndex = this.sections.findIndex(
//             (section) => section.sectionNum == sectionNum);
//         if (sectionIndex >= 0) {
//             this.sections[sectionIndex].enrolled++;
//             renderSections(this.sections);
//         }
//     }
// };

function sectionTemplate(section) {
    return `<tr>
      <td>${section.sectionNum}</td>
      <td>${section.roomNum}</td>
      <td>${section.enrolled}</td>
      <td>${section.days}</td>
      <td>${section.instructor}</td></tr>`
}

function renderSections(sections) {
    const html = sections.map(sectionTemplate);
    document.querySelector("#sections").innerHTML = html.join("");
}

renderSections(aCourse.sections);

document.querySelector("#enrollStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.enrollStudent(sectionNum);
    renderSections(aCourse.sections);
});