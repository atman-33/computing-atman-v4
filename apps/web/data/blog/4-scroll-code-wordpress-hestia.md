---
title: Scrolling the code embedded in a post of the WordPress Hestia theme horizontally.
date: '2023-02-25'
tags: ['word press', 'css']
draft: false
images: [/static/blog/4/add_css.png]
summary: This is an article for those using the WordPress theme "Hestia. "When embedding source code on a post page, is there a concern that it might wrap and become hard to read?
---

This is an article for those using the WordPress theme "Hestia."

When embedding source code on a post page, is there a concern that it might wrap and become hard to read?

This time, we will explain a solution using additional CSS.

Added on 3/22/2020:
It has been discovered that by "① selecting the (source code) block" and then choosing "② change block type to Preformatted," you can achieve scrollability. This feature is sufficient.

![image](/static/blog/4/seikeizumi.png)

## Making Source Code Display on the Web More Readable

If you have lengthy code samples displayed horizontally like the one below, they might automatically wrap and become difficult to read.

```py
def __line(self, message):
    if len(self.line_notify_token) > 0:
        requests.post('https://notify-api.line.me/api/notify', headers={'Authorization': 'Bearer ' + self.line_notify_token}, data={'message': '\n' + message})
```

## Additional CSS Setup

Now, let's set up additional CSS to achieve horizontal scrolling for the source code. First, navigate to the Customizer of WordPress and go to the edit screen for additional CSS.

![image](/static/blog/4/main.png)

Next, enter the following code:

![image](/static/blog/4/add_css.png)

```css
pre.scrollable-code {
  overflow-x: auto;
  margin-bottom: 1em;
  white-space: pre;
  max-width: 770px;
  word-wrap: normal;
}
```

## Editing Code in the Post Editor

To apply the additional CSS, edit the code directly in the post editor. On the post editing screen, switch to the "Code Editor" view.

![image](/static/blog/4/code_editer.PNG)

Since it will display HTML, look for the block where you embedded the source code. It's the part enclosed in ``<pre class="wp-block-code"><code>...</code></pre>``.

```html
<!-- wp:code -->
<pre class="wp-block-code"><code>    def __line(self, message):
        if len(self.line_notify_token) > 0:
            requests.post('https://notify-api.line.me/api/notify', headers={'Authorization': 'Bearer ' + self.line_notify_token}, data={'message': '\n' + message})
</code></pre>
<!-- /wp:code -->
```

For the above code, do the following two things:
1. Change the `pre class` from "wp-block-code" to "scrollable-code".
2. Remove the ``<wp:code></wp:code>`` tags.

It should look like the code below:
```html
<!-- wp:code -->
<pre class="scrollable-code">    def __line(self, message):
    if len(self.line_notify_token) > 0:
        requests.post('https://notify-api.line.me/api/notify', headers={'Authorization': 'Bearer ' + self.line_notify_token}, data={'message': '\n' + message})
</pre>
<!-- /wp:code -->
```

Here is the completed code sample with horizontal scrolling support:

![image](/static/blog/4/sample.png)

That's all.
