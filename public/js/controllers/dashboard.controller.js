(function(){
    angular.module('mymeanblog')
            .controller('DashboardController', DashboardController)

    DashboardController.$inject = ['$scope'];

    function DashboardController($scope){
        $scope.edit = edit;
        $scope.delete = deletePost;
        $scope.posts = [
            {
                _id: 'slkdjfknxcviuhwelfnkbvi',
                title: 'some title',
                body: 'things and stuff and things and stuff',
                created: new Date(),
                updated: new Date()
            },
            {
                _id: 'slkdjfknxcviuhwelfnkbvi',
                title: 'some title',
                body: 'things and stuff and things and stuff',
                created: new Date(),
                updated: new Date()
            }
        ]

        function edit(post){
            console.log('Moving to the edit page');
        }
        function deletePost(post){
            console.log('Deleting the post with _id of' + post._id);
        }
    }
}());