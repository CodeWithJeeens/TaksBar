// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: red; icon-glyph: magic;
const dataUrl = "https://codewithjeeens.github.io/TaksBar/result.json";

let widget = await createWidget();
Script.setWidget(widget);
widget.presentMedium();
Script.complete();

async function createWidget() {
    const widget = new ListWidget();

    const data = await new Request(dataUrl).loadJSON();

    let titleRow = widget.addText(--TaksBar--);
    titleRow.font = Font.boldSystemFont(15);
    titleRow.textColor = Color.white();

    let Spacer0 = listwidget.adspacer()

    let Name = listwidget.addText(`${data.Name}`)

    let Spacer1 = listwidget.adspacer()

    let Name = listwidget.addText(`${data.Guthaben}`)

    let Spacer0 = listwidget.adspacer()

    let Name = listwidget.addText(`${data.Bonuspunkte}`)


    let gradient = new LinearGradient()

    gradient.colors = [new Color("3a8cc1"), new Color("00A9D6")];
    gradient.locations =  [0, 1];

    widget.backgroundGradient = gradient
    return widget;