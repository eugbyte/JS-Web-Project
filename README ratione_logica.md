# Ratione Logica website

I would start with a static HTML+CSS - that would probably take one or two days.
Later on we can add redirection links, and finally the dynamic JS parts.

Main body of CSS style should be shared among all pages here.
It would be also good to start with "template" HTML page that contains all style elements,
and then customize its contents.

## Structure

We would put it on our GitHub Pages :-).
The overall structure of the website should be like this navbar describes:

* Products
  * LeSearch - advanced AI for legal research support
  * CollaDraft - for collaborative contract drafting
* Career page
  * List of employees
  * Here we will encourage people to send us CV
* Community
  * FAQ - frequently asked questions page, with these questions enumerated
  * At the end of the FAQ, we should have a link to create a new GitHub issue
* Team page - should show "Team login" when you mouse over it :-)
  * Wiki - will be redirection to Ratione Logica internal wiki on GitHub
  * Docs - Team login to apps.google.com
* About page (it is THE home page)

### Extras

Main page should have an option to register for further informations by email.
We should use something free like "Intercom" to allow visitors to contact us on the page,
as soon as they arrive.

## Pages

All pages should have a standard navbar, and feedback "Intercom", along with a copyright note.

### Home page

Home page should contain a short description:
```
Ratione Logica is a startup company in legal technology.
We aim to simplify and facilitate work of lawyers.
```
And motto:
```
"You do what you think is right and let the law catch up" - Thurgood Marshall
```
Then short list of our products.

### Product pages

Each product should contain logo (not invented yet), name, a short description, and a link to the prototype
(will be provided later).

* CollaDraft - Collaborative document drafting.
"""Our software allows you to share documents being drafted, and make sure that they are changed in the consistent way.
You can do you writing in most popular text processors, and check with your team that they are up to date with all changes.
Customized to your jurisdiction <footnote>Contact us if this functionality is available in your jurisdiction yet!</footnote>
"""

* LeSearch - Legal research improved
"""
Our proprietary AI technology will make speed up your legal research, in particular due dilligence process, and finding law relevant to your case or contract.
"""

### Career page

We start with a list of employees. For each:
* Photo
* Name and function
* Description of specialty

It ends with a single big "question mark" symbol instead of photo, and a link under this photo that suggests to
send CV to the given address.

Now we have the following content:
1. Founder:
  * (my photo)
  * Michał - Founder and CEO
  * Years of experience in <a href="http://embl.de">computational</a><a href="www.mpibpc.de">science</a>, <a href="jewelpaymentech.com">financial</a> industry, and contract flow management. Lives to architect ever more complex data analytics platforms.
2. Błażej - Advisor
  * PhD in international law, currently research fellow at <link>SMU</link>, and <google scholar search link>author of many law research articles
3. Michael - Advisor
  *  Bachelor of Law, founder of LegalTech company <link>casehub.com</link>
4. Veronica - Front-end technology manager
  * Serial founder, winner of the Hackathon
5. Eugene - Intern:
  * (your photo)
  * Becoming Bachelor of Law in 2019 from <your university with a link>

### Community page

Community page should start with a FAQ template, and then give opportunity to ask a new question through email.

