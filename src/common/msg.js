import { Dialog, Toast } from "vant";
export default {
    // Toast轻提示======================================
    // 文字轻提示
    inform(content) {
        Toast(content)
    },
    // 成功轻提示
    success(content) {
        Toast.success(content)
    },
    // 失败轻提示
    fail(content) {
        Toast.fail(content)
    },
    // 加载中轻提示
    loading() {
        Toast.loading({
            type: 'loading',
            duration: 0,
            mask: true,
            forbidClick: true, // 禁用背景点击
            loadingType: 'spinner',
            message: '加载中'
        })
    },
    // 隐藏加载中轻提示
    hideLoading() {
        Toast.clear()
    },
    // Dialog弹框=================
    // 提示弹框（带“确认”按钮）
    alert(content) {
        Dialog.alert({
            title: '提示',
            message: content
        })
    },
    // 确认弹窗（带“确认”、“取消”按钮）
    confirm(content) {
        return Dialog.confirm({
            title: '提示',
            message: content
        })
    },
}