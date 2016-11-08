---
layout: docs
title: 페이지 나누기
permalink: /docs/pagination/
---

많은 웹사이트 &mdash; 특히 블로그 &mdash; 들에서 전체 포스트 목록을 작은
목록으로 나누어 여러 페이지로 보여주는 방법을 보통 많이들 사용합니다. Jekyll 은
페이지 나누기 플러그인을 제공하기 때문에, 여러 페이지로 목록을 나눌 때 필요한
파일과 폴더들을 자동으로 생성할 수 있습니다.

Jekyll 3 에서는, Gemfile 과 `_config.yml` 의 `gems` 에 `jekyll-paginate` 를
추가하세요. Jekyll 2 에는 기본적으로 포함되어 있습니다.

<div class="note info">
  <h5>페이지 나누기는 오직 HTML 파일에서만 작동합니다</h5>
  <p>
    페이지 나누기는 Markdown 이나 Textile 파일 안에서 작동하는 것이 아닙니다. 페이지
    나누기는 파일명이 <code>index.html</code> 인 HTML 파일 안에서 호출되거나
    환경설정 <code>paginate_path</code> 로 설정된 하위 디렉토리 안에서 동작합니다.


  </p>
</div>

## 페이지 나누기 활성화

블로그에 페이지 나누기 기능을 활성화하려면, 한 페이지에 보여주는 항목 개수에
대한 설정을 `_config.yml` 파일에 추가하세요:

{% highlight yaml %}
paginate: 5
{% endhighlight %}

생성된 사이트의 한 페이지 당 표시하고자 하는 포스트의 최대 개수를 입력하면
됩니다.

이렇게 나뉘어진 페이지가 생성될 위치도 지정할 수 있습니다:

{% highlight yaml %}
paginate_path: "/blog/page:num/"
{% endhighlight %}

이 설정은 `blog/index.html` 에서 사용되어, 나뉘어진 각 페이지는 이 값을
`paginator` 라는 Liquid 로 받게 되며 결과물은 `blog/page:num/` 에 만들어집니다.
여기서 `:num` 은 `2` 부터 시작하는 페이지 번호입니다. 사이트가 12 개의 포스트를
가지고 있고 `pagenate: 5` 라고 설정되어 있는 경우, Jekyll 은 처음 5 개의
포스트로 `blog/index.html` 을 만들고, 다음 5 개의 포스트로 `blog/page2/index.html` 을,
마지막 2 개의 포스트로는 `blog/page3/index.html` 을 만들게 됩니다.

<div class="note warning">
  <h5>고유주소 설정은 하지 마세요</h5>
  <p>
    블로그 페이지의 머리말에 고유주소를 설정하면 페이지 나누기가 작동하지
    않습니다. 고유주소는 설정하지 마세요.
  </p>
</div>

## 사용가능한 Liquid 속성

페이지 나누기 플러그인이 제공하는 Liquid 객체 `paginator` 의 속성은 다음과
같습니다:

<div class="mobile-side-scroller">
<table>
  <thead>
    <tr>
      <th>속성</th>
      <th>설명</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><p><code>page</code></p></td>
      <td><p>현재 페이지 번호</p></td>
    </tr>
    <tr>
      <td><p><code>per_page</code></p></td>
      <td><p>페이지 당 포스트 개수</p></td>
    </tr>
    <tr>
      <td><p><code>posts</code></p></td>
      <td><p>현재 페이지의 포스트 목록</p></td>
    </tr>
    <tr>
      <td><p><code>total_posts</code></p></td>
      <td><p>사이트의 전체 포스트 개수</p></td>
    </tr>
    <tr>
      <td><p><code>total_pages</code></p></td>
      <td><p>전체 페이지 수</p></td>
    </tr>
    <tr>
      <td><p><code>previous_page</code></p></td>
      <td>
          <p>
              이전 페이지 번호,
              없으면 <code>nil</code>
          </p>
      </td>
    </tr>
    <tr>
      <td><p><code>previous_page_path</code></p></td>
      <td>
          <p>
              이전 페이지 경로,
              없으면 <code>nil</code>
          </p>
      </td>
    </tr>
    <tr>
      <td><p><code>next_page</code></p></td>
      <td>
          <p>
              다음 페이지 번호,
              없으면 <code>nil</code>
          </p>
      </td>
    </tr>
    <tr>
      <td><p><code>next_page_path</code></p></td>
      <td>
          <p>
              다음 페이지 경로,
              없으면 <code>nil</code>
          </p>
      </td>
    </tr>
  </tbody>
</table>
</div>

<div class="note info">
  <h5>페이지 나누기는 태그나 카테고리를 지원하지 않습니다</h5>
  <p>페이지 나누기는 각 포스트의 YAML 머리말에 정의된 변수에 관계없이
  <code>posts</code> 변수의 모든 포스트를 나눕니다.
  태그나 카테고리로 구분된 포스트 묶음을 페이지로 나누는 것은 현재 허용되지
  않습니다.
  포스트에만 국한되기 때문에 문서 콜렉션에도 적용할 수 없습니다.</p>
</div>

## 페이지로 나눠진 포스트 렌더링

그 다음 해야 할 일은 목록에 들어있는 포스트를 `paginator` 변수를 사용하여 실제로
출력하는 것입니다. 보통은 사이트의 메인 페이지들 중 하나에 이 작업을 하게 될
것입니다. 여러 페이지로 나뉘어진 포스트를 HTML 파일에 표시하는 방법 중 하나가
여기 있습니다:

{% highlight html %}
{% raw %}
---
layout: default
title: My Blog
---

<!-- This loops through the paginated posts -->
{% for post in paginator.posts %}
  <h1><a href="{{ post.url }}">{{ post.title }}</a></h1>
  <p class="author">
    <span class="date">{{ post.date }}</span>
  </p>
  <div class="content">
    {{ post.content }}
  </div>
{% endfor %}

<!-- Pagination links -->
<div class="pagination">
  {% if paginator.previous_page %}
    <a href="{{ paginator.previous_page_path }}" class="previous">Previous</a>
  {% else %}
    <span class="previous">Previous</span>
  {% endif %}
  <span class="page_number ">Page: {{ paginator.page }} of {{ paginator.total_pages }}</span>
  {% if paginator.next_page %}
    <a href="{{ paginator.next_page_path }}" class="next">Next</a>
  {% else %}
    <span class="next ">Next</span>
  {% endif %}
</div>
{% endraw %}
{% endhighlight %}

<div class="note warning">
  <h5>첫 페이지 경계조건에 주의하세요</h5>
  <p>
    Jekyll 은 ‘page1’ 폴더를 생성하지 않기 때문에, 위 코드는 <code>/page1</code>
    링크에 대하여 올바르게 작동하지 않습니다.
    만약 이것이 문제가 된다면 아래에서 설명하는 방법을 참고하세요.
  </p>
</div>

아래 HTML 코드는 첫 번째 페이지와 함께 나머지 페이지들의 링크도 올바르게
처리합니다.

{% highlight html %}
{% raw %}
{% if paginator.total_pages > 1 %}
<div class="pagination">
  {% if paginator.previous_page %}
    <a href="{{ paginator.previous_page_path | prepend: site.baseurl | replace: '//', '/' }}">&laquo; Prev</a>
  {% else %}
    <span>&laquo; Prev</span>
  {% endif %}

  {% for page in (1..paginator.total_pages) %}
    {% if page == paginator.page %}
      <em>{{ page }}</em>
    {% elsif page == 1 %}
      <a href="{{ paginator.previous_page_path | prepend: site.baseurl | replace: '//', '/' }}">{{ page }}</a>
    {% else %}
      <a href="{{ site.paginate_path | prepend: site.baseurl | replace: '//', '/' | replace: ':num', page }}">{{ page }}</a>
    {% endif %}
  {% endfor %}

  {% if paginator.next_page %}
    <a href="{{ paginator.next_page_path | prepend: site.baseurl | replace: '//', '/' }}">Next &raquo;</a>
  {% else %}
    <span>Next &raquo;</span>
  {% endif %}
</div>
{% endif %}
{% endraw %}
{% endhighlight %}
