@Library('kairo-ci@v1.0.1') _

import sh.kairo.NodeProject

k8sNode(['node']) {
  nodeContainer {
    def ngui = new NodeProject(this, 'pnpm', 'angular')

    stage('PNPM - Install') {
      ngui.initCorepack()
      ngui.install()
    }

    stage('PNPM - Lint') {
      ngui.lint()
    }

    stage('PNPM - Format') {
      ngui.format()
    }

    stage('PNPM - Build') {
      ngui.build()
    }

    stageRelease('NPM - Publish NGUI') {
      ngui.publishWithPublicAccess('angular/dist/ng-ui')
    }
  }
}
