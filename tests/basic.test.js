import { Selector } from 'testcafe';

//prettier-ignore
fixture `Getting started with TestCafe`
    .page ('https://devexpress.github.io/testcafe/example/')
    .before(async t => {
        //Test setup goes here
        //await runDatabaseReset()
        //await seedTestData()
    })
    .beforeEach(async t => {
        await t.setTestSpeed(0.1)
        await t.setPageLoadTimeout(0)
        await t.maximizeWindow()
        //runs before each test
    })
    .after(async t =>{
        //Cleaning test data
        //logging and sending data to monitoring systems
    })
    .afterEach(async t => {
        //runs after each test
    });


test('My first testcafe test',async t => {
    //await t.maximizeWindow()

    const dev_name_input = Selector('#developer-name')
    const submit_button = Selector('#submit-button')
    const articleText = Selector('#article-header').innerText
    
    //await t.takeScreenshot({fullPage:true})
    //await t.takeElementScreenshot(submit_button)
    await t.typeText(dev_name_input,"Tharushi")
    await t.wait(2000)
    await t.click(submit_button)

    await t.expect(articleText).contains('Tharushi')
})

test.skip('My second testcafe test',async t => {
    //await t.maximizeWindow()

    const dev_name_input = Selector('#developer-name')
    const submit_button = Selector('#submit-button')
    const articleText = Selector('#article-header').innerText
    
    //await t.takeScreenshot({fullPage:true})
    //await t.takeElementScreenshot(submit_button)
    await t.typeText(dev_name_input,"Tharushi")
    await t.wait(2000)
    await t.click(submit_button)

    await t.expect(articleText).contains('Tharushi')
})

test.only('My third testcafe test',async t => {
    //await t.maximizeWindow()

    const dev_name_input = Selector('#developer-name')
    const submit_button = Selector('#submit-button')
    const articleText = Selector('#article-header').innerText
    
    //await t.takeScreenshot({fullPage:true})
    //await t.takeElementScreenshot(submit_button)
    await t.typeText(dev_name_input,"Tharushi")
    await t.wait(2000)
    await t.click(submit_button)

    await t.expect(articleText).contains('Tharushi')

    //***********Actions API****************
    //click
    await t.click('selector',{options})
    //double click
    await t.doubleClick('selector',{options})
    //right click
    await t.rightClick('selector',{options})
    //drag element
    await t.drag('selector',200,0,{options})
    //hover
    await t.hover('selector',{options})
    //select text
    await t.selectText('selector')
    //type text
    await t.typeText('selector','text')
    //press key on the keyboard
    await t.pressKey('key')
    //navigation
    await t.navigateTo('url')
    //take screenshot
    await t.takeScreenshot()
    await t.takeElementScreenshot()
    //resize window
    await t.resizeWindow(800,600)


    //***********Assertions API****************
    //deep equal
    await t.expect('foo').eql('foo','message',options)
    //not deep equal
    await t.expect('foo').notEql('foo')
    //ok
    await t.expect(true).ok()
    //not ok
    await t.expect(true).notOk()
    //contains
    await t.expect('foo').contains('o')
    //not contains
    await t.expect('foo').notContains('hey')
    //greater or less than
    await t.expect(10).gt(10)
    await t.expect(10).gte(10)
    await t.expect(10).lt(10)
    await t.expect(10).lte(10)
    //within
    await t.expect(10).within(1,100)
    //not within
    await t.expect(10).notWithin(5,50)
})
