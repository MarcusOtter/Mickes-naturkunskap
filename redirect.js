$(function() // DOM ready
{
    let mammalsButton = $("#mammals");
    let birdsButton = $("#birds");
    let treesButton = $("#trees");

    mammalsButton.click(SetCategory);
    birdsButton.click(SetCategory);
    treesButton.click(SetCategory);
});

function SetCategory()
{
    window.location.assign(`Quiz/${this.id}.html`);
}
