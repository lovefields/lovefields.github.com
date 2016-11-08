---
layout: docs
title: 기여하기
permalink: /docs/contributing/
---

Jekyll 에 추가할 좋은 아이디어가 떠오르셨군요. 좋습니다! 이것만 기억해주시기
바랍니다:

* **Jekyll 에 직접적인 관련이 없거나 기술적인 질문이 아니면 https://talk.jekyllrb.com 을 이용하세요.**
* **관련된 문서를 갱신하지 않았거나 테스트 되지 않은 내용은 반영되지 않습니다.**
* 이미 존재하는 기능에 대한 작은 수정이나 패치를 만드는 거라면, 간단한 테스트도
  함께 해주세요. 현재 사용중인 테스트 환경을 벗어나지 말고
  [Shoulda](https://github.com/thoughtbot/shoulda/tree/master) 와
  [RSpec-Mocks](https://github.com/rspec/rspec-mocks) 를 사용해 주시기 바랍니다.
* 만약 완전히 새로운 기능을 만들고 있다면, 새
  [Cucumber](https://github.com/cucumber/cucumber/) 기능을 만들고 각 단계를
  그대로 따라해주세요. 또, fork 한 저장소의 `site` 에 문서를 추가해 주시면
  고맙겠습니다. 기능이 merge 될 때 메인 `site` 인 jekyllrb.com 으로 이동될
  것입니다.
* Jekyll 의 작동방식을 변경하는 경우, 문서 내용을 갱신해 주세요. 문서는
  `site/_docs` 에 있습니다. 문서에 누락된 정보가 있다면, 언제든지 추가해주세요.
  좋은 문서가 좋은 프로젝트를 만든답니다!
* 루비 코드를 수정할 경우에는, [GitHub Ruby
  Styleguide](https://github.com/styleguide/ruby) 를 준수해주시기 바랍니다.
* 최선을 다해서 **작은 Pull Request** 를 제출해 주시기 바랍니다. 리뷰하기
  쉬울수록 merge 하기도 쉽습니다.
* Pull Request 를 제출할 때에는 본문을 신중하게 작성해 주세요. 수정하게 된
  동기와 수정사항에 대한 설명, [완료/미완료로 구분된 모든 작업
  목록](http://git.io/gfm-tasks)은 리뷰 시간을 단축시키는데에 많은 도움이
  됩니다.

<div class="note warning">
  <h5>테스트 없이는 반영되지 않을 것입니다</h5>
  <p>
    이미 있던 기능에 대한 수정이나 패치를 만든다면, 간단한 테스트도 함께
    해주세요.
  </p>
</div>


Test 의존요소
-----------------

Jekyll 의 모든 의존요소들을 설치해야지만 테스트 도구 실행과 Gem 생성이
가능합니다. 이 명령어만 실행하면 모든 설정이 끝납니다:

<figure class="highlight"><pre><code>$ script/bootstrap</code></pre></figure>

시작하기 전, 테스트를 실행하고 잘 통과되는지 확인해주세요 (환경설정이 올바른지
확인하기 위한 것입니다):

<figure class="highlight"><pre><code>$ script/cibuild</code></pre></figure>

오직 `test/` 안의 파일만 업데이트하는 경우에는, 이 명령어를 사용하세요:

<figure class="highlight"><pre><code>$ script/test test/blah_test.rb</code></pre></figure>

오직 `.feature` 파일만 업데이트하는 경우에는, 이 명령어를 사용하세요:

<figure class="highlight"><pre><code>$ script/cucumber features/blah.feature</code></pre></figure>

`script/test` 와 `script/cucumber` 를 전달인자 없이 실행하면, 관련된 파일 전체에
대하여 실행됩니다.

작업흐름
--------

자신의 작업 내용을 프로젝트에 반영하는 가장 직접적인 절차는 다음과 같습니다:

* 프로젝트 저장소를 fork 합니다.
* 자신의 fork 를 clone 합니다 ( `git clone git@github.com:[username]/jekyll.git` ).
* 작업을 진행할 토픽 브랜치를 생성합니다 ( `git checkout -b my_awesome_feature` ).
* 마음껏 뜯어 고치고, 테스트 하세요. 뭘 먼저하든 상관없습니다.
* `script/cibuild` 를 실행하여 모든 테스트가 잘 통과되는지 확인하세요.
* 필요하다면, 커밋을 논리적인 단위로 rebase 해주세요. 에러가 나지 않게 말이죠.
* 해당 브랜치를 push 합니다 ( `git push origin my_awesome_feature` ).
* jekyll/jekyll 에 Pull Request 를 생성하여 변경사항에 대한 설명과 프로젝트에
* merge 하면 어떤점이 좋은지 설명해주시기 바랍니다.

문서 내용 갱신하기
----------------------

저희는 Jekyll 문서를 가능한 한 최상의 상태로 유지하고자 합니다. 이 문서는
오픈-소스이며, 부족한 정보를 채워줄 Pull Request 라면 무엇이든 언제든지
환영합니다.

jekyllrb.com 의 모든 문서는
GitHub.com 의 Jekyll 저장소 안에 [site]({{ site.repository }}/tree/master/site)
디렉토리에서 찾을 수 있습니다.

문서에 대한 Pull Request 는 모두 `master` 브랜치를 가리킵니다. 다른 브랜치에
대한 Pull Request 는 모두 거절될 것입니다.

GitHub 의 [Jekyll 위키]({{ site.repository }}/wiki)는 모든 GitHub 사용자에게
열려있기 때문에 Pull Request 없이도 자유롭게 내용을 갱신할 수 있습니다.

만약 [플러그인 목록](/docs/plugins/#available-plugins)에 자신의 플러그인을
추가하고 싶다면, [플러그인 페이지 소스 파일]({{ site.repository }}/blob/master/site/_docs/plugins.md)를
수정해서 자신의 플러그인 타입에 맞는 소제목 아래에 플러그인에 대한 링크를
추가하고 Pull Request 를 제출해주세요.

Gotchas
-------

* Gem 버전을 변경한 것은 Pull Request 하지 말아주시기 바랍니다.
* 되도록이면 jekyll/jekyll 의 최신 커밋을 기반으로 패치를 생성하세요. 작업
  내용을 반영하기 쉽고, 관리자가 할일이 적어집니다. 어떤 경우에도 항상 옳은
  방법입니다.
* GitHub 이슈에 [fix] 나 [feature] 등의 태그를 사용하지 마세요. 관리자가 이슈를
  확인하고 직접 태그를 붙일 것입니다.

마지막으로...
----------

<div class="note">
  <h5>더 좋은 방법을 알려주세요!</h5>
  <p>
    Jekyll 을 사용하는 것과 고치는 것은 재밌고, 간단하고, 쉬워야 합니다. 어딘가
    어렵고 성가신 부분을 발견했다면, GitHub 에 <a
    href="{{ site.repository }}/issues/new">이슈를 생성</a>해서 설명해 주세요.
    더 나은 방향으로 고칠 수 있다고 생각합니다.
  </p>
</div>
