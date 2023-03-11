'use strict';

const roarHeaderRowEl = document.querySelector('.roar-header-row');
const roarRowsEl = [...document.querySelector('.monster-roar-tbl').children];
const queryMonsterEl = document.getElementById('monster-search');
const clearButtonEl = document.getElementById('monster-search-clear');
const modMonDetailDivEl = document.querySelector('.monster-detail');
const anja = document.getElementById('anja');

// focus on the textbox if not mobile, add event listener if mobile
window.mobileCheck = function () {
  let check = false;
  (function (a) {
    if (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
        a
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        a.substr(0, 4)
      )
    )
      check = true;
  })(navigator.userAgent || navigator.vendor || window.opera);
  return check;
};
if (!window.mobileCheck()) {
  // queryMonsterEl.focus();
} else {
  // if mobile
}
document.addEventListener('click', function (e) {
  if (e.target.id !== 'monster-search') {
    zoomOutMobile();
  }
});

[...roarHeaderRowEl.querySelectorAll('td')].forEach(
  td =>
    (td.style.width = `${
      (document.querySelector('#monster-search-clear').getBoundingClientRect()
        .x +
        document.querySelector('#monster-search-clear').getBoundingClientRect()
          .width) /
      3
    }px`)
);

// go 100% width (aimed for mobile devices after clicking away from search box or hitting return)
function zoomOutMobile() {
  let viewport = document.querySelector('meta[name="viewport"]');
  if (viewport) {
    // console.log(viewport);
    viewport.content = 'initial-scale=1.0';
    viewport.content = 'width=device-width';
  }
}

const displayModal = function () {
  modal.style.display = 'block';
};

const addToMonsterzList = function (monsterz) {
  monsterz.push({
    id: 1001,
    name: 'Fatalis',
    elements: ['tbd'], //// need to update this!
    ailments: [{ name: 'tbd' }],
    description:
      'A legendary black dragon known only as Fatalis. Rumored to have destroyed a kingdom in a single night, and has taken its castle for a roost.',
    resistances: [{ element: 'stun', condition: null }],
    weaknesses: [
      { element: 'fire', stars: '2', condition: null },
      { element: 'water', stars: '1', condition: null },
      { element: 'thunder', stars: '1', condition: null },
      { element: 'ice', stars: '1', condition: null },
      { element: 'dragon', stars: '3', condition: null },
      { element: 'poison', stars: '1', condition: null },
      { element: 'sleep', stars: '1', condition: null },
      { element: 'paralysis', stars: '1', condition: null },
      { element: 'blast', stars: '1', condition: null },
    ],
  });
};

const getMonsAttTypeOrLocal = function (strtStr, whatToPull, elementOrAilment) {
  let finalString = strtStr;
  if (whatToPull.length === 0) {
    return (finalString += ` no ${elementOrAilment}`);
  }
  whatToPull.forEach((element, i) => {
    if (element.name) {
      // checking for if this is an ailment which is an object
      if (i === 0) {
        finalString += ` ${element.name.toLowerCase()}`;
      } else {
        finalString += `, ${element.name.toLowerCase()}`;
      }
    } else {
      if (i === 0) {
        finalString += ` ${element.toLowerCase()}`;
      } else {
        finalString += `, ${element.toLowerCase()}`;
      }
    }
  });
  return finalString;
};

// intermitently calling this function until data pulls into array from api

function waitForMonAPI() {
  if (typeof monsterz[57] !== 'undefined') {
    // addToMonsterzList(monsterz);
    roarRowsEl.forEach(element => {
      const monsterCell = [...element.children].map(el =>
        el.querySelector('a')
      );
      for (let i = 0; i < 3; i++) {
        // console.log(monsterCell[i]);
        if (monsterCell[i]) {
          //   console.log(monsterCell[i].textContent?.toLowerCase());
          //   console.log(activeMonsterFn(monsterCell[i]?.textContent));
          monsterCell[i].dataset.id = activeMonsterFn(
            monsterCell[i]?.textContent
          )?.id;
          monsterCell[i].addEventListener('click', function () {
            let displayMonster = monsterz.find(
              mon => Number(mon.id) === Number(monsterCell[i].dataset.id)
            );
            // console.log(displayMonster);
            if (displayMonster) {
              // document.getElementById('testing').textContent =
              //   displayMonster.name;
              let tableString = `<table class="monster-weak-res-table"><thead><tr style="text-align: center; height: 62px">
              <td style="height: 62px">Element</td>
              <td style="height: 62px">Effectiveness</td>
              <td style="height: 62px">Condition</td>
            </tr>
          </thead>`;
              displayMonster.weaknesses
                .concat(displayMonster.resistances)
                .sort((a, b) => {
                  let fa = a.element.toLowerCase(),
                    fb = b.element.toLowerCase();
                  if (fa < fb) {
                    return -1;
                  }
                  if (fa > fb) {
                    return 1;
                  }
                  return 0;
                })
                .forEach(resOrWkness => {
                  let eficaz;
                  if (resOrWkness.stars) {
                    eficaz = '⭐'.repeat(resOrWkness.stars);
                  } else {
                    eficaz = '❌';
                  }
                  tableString += `<tr style="text-align: center; height: 62px"><td>${
                    resOrWkness.element
                  }</td><td>${eficaz}</td><td>${
                    resOrWkness.condition !== null
                      ? resOrWkness.condition
                      : 'N/A'
                  }</td></tr>`;
                });
              tableString += '</table>';
              const attType = getMonsAttTypeOrLocal(
                'Attacks with:',
                displayMonster.elements,
                'element'
              );
              const ailType = getMonsAttTypeOrLocal(
                'Ailment attacks:',
                displayMonster.ailments,
                'ailment'
              );
              const locations = getMonsAttTypeOrLocal(
                'Can be found in locations:',
                displayMonster.locations,
                'location'
              );
              // the below could be a reduce function
              let ailmentsDescriptions = '';
              if (displayMonster.ailments !== []) {
                displayMonster.ailments.forEach(ail => {
                  ailmentsDescriptions += `${ail.name}: ${ail.description}<br>`;
                });
              }
              document.querySelector('.monster-detail').innerHTML = `<h2>${
                displayMonster.name
              }</h2><h5>${displayMonster.species}</h5><p>${
                displayMonster.description
              }</p><p>${attType}</p><p>${ailType} ${
                displayMonster.ailments === []
                  ? ''
                  : '<i> &nbsp&nbsp*More info on ailments can be found below the table</i>'
              }</p><p>${locations}</p>${tableString}<p><i>${ailmentsDescriptions}</i></p>`;
              displayModal();
            } else {
              //   alert(
              //     "Don't have data on this monster, please see the following picture for all monsters."
              //   );
              //   window.open('full-monster-guide.png');
              displayMonster = this.textContent;
              const displayMonsterURL = `https://monsterhunterworld.wiki.fextralife.com/${displayMonster.replace(
                ' ',
                '+'
              )}`;
              modMonDetailDivEl.innerHTML = `<h2>${displayMonster}</h2><p>The data for this monster is not available on this site yet, but you can reference the MHW wiki site (has ads, opens in new window):<br>
              <a href="${displayMonsterURL}" target="_blank">${displayMonster} wiki page</a></p><p>Alternatively, you can reference a picture that details monster info for all monsters (no ads, opens in new page, large pic - better option for bigger screens):<br><a href='full-monster-guide.png' target="_blank">Full monster guide picture</a></p>`;
              displayModal();
            }
          });
        }
      }
    });
  } else {
    setTimeout(waitForMonAPI, 250);
  }
}
waitForMonAPI();

const updateTable = function () {
  if (queryMonsterEl === document.activeElement) {
    const toQuery = queryMonsterEl.value;
    roarRowsEl.forEach(element => {
      const monsterCell = [...element.children].map(el =>
        el.querySelector('a')
      );
      let queryMatch = false;
      //   "anjanath".includes("anja")
      for (let i = 0; i < 3; i++) {
        if (monsterCell[i]) {
          if (
            monsterCell[i].textContent
              .toLowerCase()
              .includes(toQuery.toLowerCase())
          ) {
            monsterCell[i].classList.remove('removed');
            queryMatch = true;
          } else {
            monsterCell[i].classList.add('removed');
          }
        }
      }
      if (toQuery === '') {
        element.classList.remove('removed');
      } else if (queryMatch === false) {
        element.classList.add('removed');
      } else {
        element.classList.remove('removed');
      }
    });
  }
};

document.addEventListener('keyup', function (k) {
  // console.log(k.key);
  if (k.key === 'Enter') {
    queryMonsterEl.blur();
    zoomOutMobile();
  }
  updateTable();
});

clearButtonEl.addEventListener('click', function () {
  queryMonsterEl.value = '';
  queryMonsterEl.focus();
  updateTable();
});

console.log(monsterz);
