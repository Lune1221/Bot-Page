// ページ読み込み完了時の処理
document.addEventListener('DOMContentLoaded', () => {
    console.log("MyBot Landing Page Loaded successfully.");

    // 例: ボットの導入ボタンをクリックした際のアニメーションやトラッキング用処理
    const inviteBtn = document.querySelector('.btn-primary');
    if (inviteBtn) {
        inviteBtn.addEventListener('click', () => {
            console.log("Invite button clicked!");
        });
    }
});
