// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: red; icon-glyph: magic;
let widget = await createWidget();
Script.setWidget(widget);
widget.presentMedium();
Script.complete();

// Paste your Json Link
const dataUrl = "https://codewithjeeens.github.io/TaksBar/result.json";

// Don't touch this !!!
async function createWidget() {

    const widget = new ListWidget();
    const data = await new Request(dataUrl).loadJSON();

    let titleRow = widget.addText(--TaksBar--);
    titleRow.font = Font.boldSystemFont(15);
    titleRow.textColor = Color.white();
//Spacer0
    let Spacer0 = listwidget.adspacer()
//Spacer0
    let Name = listwidget.addText(`${data.Name}`)
//Spacer0
    let Spacer1 = listwidget.adspacer()
//Spacer0
    let Name = listwidget.addText(`${data.Guthaben}`)
//Spacer0
    let Spacer0 = listwidget.adspacer()

    let Name = listwidget.addText(`${data.Bonuspunkte}`)


    let gradient = new LinearGradient()

    gradient.colors = [new Color("3a8cc1"), new Color("00A9D6")];
    gradient.locations =  [0, 1];

    widget.backgroundGradient = gradient
    return widget;