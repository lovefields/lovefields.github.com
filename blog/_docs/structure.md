---
layout: docs
title: 디렉토리 구조
permalink: /docs/structure/
---

Jekyll 의 핵심 역할은 텍스트 변환 엔진입니다. 시스템 배경 컨셉은 이렇습니다:
Markdown 이나 Textile 또는 일반 HTML 등 자신이 즐겨 사용하는 마크업 언어로
문서를 작성하면, Jekyll 은 이 문서들을 다양한 레이아웃으로 포장합니다. 당신은
사이트 URL 구성 방식이나 데이터가 레이아웃에 배치되는 방식 등, 변환 과정에
포함된 다양한 동작들을 원하는대로 조정할 수 있습니다. 단지 텍스트 파일을
수정하는 것만으로 이 모든 일들이 가능하며, 그 결과로 정적 웹 사이트가
만들어집니다.

가장 기초적인 Jekyll 사이트는 보통 이렇게 생겼습니다:

{% highlight bash %}
.
├── _config.yml
├── _drafts
|   ├── begin-with-the-crazy-ideas.textile
|   └── on-simplicity-in-technology.markdown
├── _includes
|   ├── footer.html
|   └── header.html
├── _layouts
|   ├── default.html
|   └── post.html
├── _posts
|   ├── 2007-10-29-why-every-programmer-should-play-nethack.textile
|   └── 2009-04-26-barcamp-boston-4-roundup.textile
├── _data
|   └── members.yml
├── _site
├── .jekyll-metadata
└── index.html
{% endhighlight %}

각 파일과 디렉토리가 하는 일의 개요는 다음과 같습니다:

<div class="mobile-side-scroller">
<table>
  <thead>
    <tr>
      <th>파일 / 디렉토리</th>
      <th>설명</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <p><code>_config.yml</code></p>
      </td>
      <td>
        <p>

          <a href="../configuration/">환경설정</a> 정보를 보관한다. 명령어를
          실행할 때 여러가지 옵션들을 추가할 수도 있지만, 그렇게 따로 외우는
          것보다 이 파일에 정의해두는게 더 편리하다.

        </p>
      </td>
    </tr>
    <tr>
      <td>
        <p><code>_drafts</code></p>
      </td>
      <td>
        <p>

          초안이란 아직 게시하지 않은 포스트를 말한다. 파일명 형식에 날짜가
          없다: <code>title.MARKUP</code>. 사용 방법은 <a href="../drafts/">
          초안 활용하기</a>를 참고하라.

        </p>
      </td>
    </tr>
    <tr>
      <td>
        <p><code>_includes</code></p>
      </td>
      <td>
        <p>

          재사용하기 위한 파일을 담는 디렉토리로서, 필요에 따라 포스트나
          레이아웃에 손쉽게 삽입할 수 있다.
          <code>{% raw %}{% include file.ext %}{% endraw %}</code> 와 같이
          Liquid 태그를 사용하면 <code>_includes/file.ext</code> 파일에 담긴
          코드가 삽입된다.

        </p>
      </td>
    </tr>
    <tr>
      <td>
        <p><code>_layouts</code></p>
      </td>
      <td>
        <p>

          포스트를 포장할 때 사용하는 템플릿이다. 각 포스트 별로
          레이아웃을 선택하는 기준은
          <a href="../frontmatter/">YAML 머리말</a>이며, 자세한 내용은 다음
          섹션에서 설명한다.
          <code>{% raw %}{{ content }}{% endraw %}</code> 와 같이 Liquid 태그를
          사용하면 페이지에 컨텐츠가 주입된다.

        </p>
      </td>
    </tr>
    <tr>
      <td>
        <p><code>_posts</code></p>
      </td>
      <td>
        <p>

          한마디로 말하면, 당신의 컨텐츠다. 중요한 것은 파일들의 명명규칙인데,
          반드시 다음 형식을 따라야 한다:
          <code>YEAR-MONTH-DAY-title.MARKUP</code>.
          <a href="../permalinks/">고유주소</a>는 포스트 별로 각각 정의할 수
          있지만, 날짜와 마크업 언어 종류는 오로지 파일명에 의해 결정된다.


        </p>
      </td>
    </tr>
    <tr>
      <td>
        <p><code>_data</code></p>
      </td>
      <td>
        <p>

          사이트에 사용할 데이터를 적절한 포맷으로 정리하여 보관하는 디렉토리.
          Jekyll 엔진은 이 디렉토리에 있는 (확장자와 포맷이 <code>.yml</code>
          또는 <code>.yaml</code>, <code>.json</code>, <code>.csv</code> 인)
          모든 YAML 파일을 자동으로 읽어들여 `site.data` 로 사용할 수 있도록
          만든다. 만약 이 디렉토리에 <code>members.yml</code> 라는 파일이
          있다면, <code>site.data.members</code> 라고 입력하여 그 컨텐츠를
          사용할 수 있다.

        </p>
      </td>
    </tr>
    <tr>
      <td>
        <p><code>_site</code></p>
      </td>
      <td>
        <p>

          Jekyll 이 변환 작업을 마친 뒤 생성된 사이트가 저장되는 (디폴트)
          경로이다. 대부분의 경우, 이 경로를 <code>.gitignore</code> 에
          추가하는 것은 괜찮은 생각이다.

        </p>
      </td>
    </tr>
    <tr>
      <td>
        <p><code>.jekyll-metadata</code></p>
      </td>
      <td>
        <p>

          Jekyll 은 이 파일을 참고하여, 마지막으로 빌드한 이후에 한번도 수정되지
          않은 파일은 어떤 것인지, 다음 빌드 때 어떤 파일을 다시 생성해야 하는지
          판단할 수 있다. 생성된 사이트에 이 파일이 복사되지는 않는다. 대부분의
          경우, 이 파일을 <code>.gitignore</code> 에 추가하는 것은 괜찮은
          생각이다.

        </p>
      </td>
    </tr>
    <tr>
      <td>
        <p><code>index.html</code> 및 다른 HTML, Markdown, Textile 파일</p>
      </td>
      <td>
        <p>

          Jekyll 은 <a href="../frontmatter/">YAML 머리말</a> 섹션을 가진 모든
          파일을 찾아 변환 작업을 수행한다. 위에서 언급하지 않은 다른 디렉토리나
          사이트의 루트 디렉토리에 있는 모든 <code>.html</code>,
          <code>.markdown</code>, <code>.md</code>, <code>.textile</code> 이
          여기에 해당한다.

        </p>
      </td>
    </tr>
    <tr>
      <td>
        <p>다른 파일/폴더</p>
      </td>
      <td>
        <p>

          <code>css</code> 나 <code>images</code> 폴더, <code>favicon.ico</code>
          파일같이 앞서 언급하지 않은 다른 모든 디렉토리와 파일들은 있는 그대로
          생성된 사이트에 복사한다. 다른 사람들이 만든 사이트는 어떤식으로
          생겼는지 궁금하다면, <a href="../sites/">Jekyll 을 사용하는
          사이트들</a>이 이미 많이 있으니 살펴보도록 한다.


        </p>
      </td>
    </tr>
  </tbody>
</table>
</div>
